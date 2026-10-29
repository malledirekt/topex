<?php
/**
 * topex-systems – Kontaktformular
 * Schickt jede Anfrage als E-Mail an die in config.php hinterlegte Adresse.
 * config.php (Vorlage: config.sample.php) liegt nur auf dem Server – NICHT ins Git-Repository.
 */
declare(strict_types=1);
date_default_timezone_set('Europe/Berlin');
header('Content-Type: application/json; charset=utf-8');
header('X-Robots-Tag: noindex');
header('Cache-Control: no-store');

function out(int $code, array $data): void { http_response_code($code); echo json_encode($data, JSON_UNESCAPED_UNICODE); exit; }

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') out(405, ['ok' => false, 'error' => 'method']);

$cfgFile = __DIR__ . '/config.php';
if (!is_file($cfgFile)) out(500, ['ok' => false, 'error' => 'config']);
$cfg = require $cfgFile;

// Nur Anfragen von der eigenen Website annehmen
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
$ref = $origin !== '' ? $origin : (string)($_SERVER['HTTP_REFERER'] ?? '');
$refOk = false;
foreach (($cfg['allowed_origins'] ?? []) as $o) if ($ref !== '' && str_starts_with($ref, $o)) $refOk = true;
if (!$refOk) out(403, ['ok' => false, 'error' => 'origin']);

$in = static fn(string $k, int $max = 500): string => trim(mb_substr((string)($_POST[$k] ?? ''), 0, $max));

// Spam-Schutz: Honeypot + Mindest-Ausfüllzeit + Sperre pro IP
if ($in('website') !== '') out(200, ['ok' => true]);
if ((int)$in('t', 12) < 3000) out(400, ['ok' => false, 'error' => 'fast']);

$name = $in('name', 120); $company = $in('company', 160); $email = $in('email', 200); $phone = $in('phone', 60);
$interest = $in('interest', 80); $message = $in('message', 4000);
if ($interest === 'Bitte wählen') $interest = '';
if ($name === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) out(422, ['ok' => false, 'error' => 'fields']);
if (($_POST['consent'] ?? '') !== 'on') out(422, ['ok' => false, 'error' => 'consent']);

$ipHash = hash('sha256', ($_SERVER['REMOTE_ADDR'] ?? '') . date('Y-m-d'));
$rlFile = sys_get_temp_dir() . '/tx_lead_' . $ipHash;
$hits = array_filter(is_file($rlFile) ? (array)json_decode((string)file_get_contents($rlFile), true) : [], static fn($ts) => $ts > time() - 600);
if (count($hits) >= 5) out(429, ['ok' => false, 'error' => 'rate']);
$hits[] = time(); @file_put_contents($rlFile, json_encode(array_values($hits)));

$body = implode("\n", [
  'Name: ' . $name,
  'Firma: ' . ($company ?: '–'),
  'E-Mail: ' . $email,
  'Telefon: ' . ($phone ?: '–'),
  'Interesse: ' . ($interest ?: '–'),
  '',
  'Anwendung / Nachricht:',
  $message ?: '–',
  '',
  '—',
  'Eingang: ' . date('d.m.Y H:i') . ' · topex-systems.com',
]);

$clean = static fn(string $s): string => str_replace(["\r", "\n"], ' ', $s);
$subject = 'Anfrage topex-systems: ' . $clean($name) . ($company ? ' (' . $clean($company) . ')' : '') . ($interest ? ' – ' . $clean($interest) : '');
$headers = [
  'From: topex-systems Website <' . $cfg['mail_from'] . '>',
  'Reply-To: =?UTF-8?B?' . base64_encode($clean($name)) . '?= <' . $email . '>',
  'MIME-Version: 1.0',
  'Content-Type: text/plain; charset=UTF-8',
  'Content-Transfer-Encoding: 8bit',
];
$encSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';
$ok = @mail($cfg['mail_to'], $encSubject, $body, implode("\r\n", $headers), '-f' . $cfg['mail_from'])
   || @mail($cfg['mail_to'], $encSubject, $body, implode("\r\n", $headers));

out($ok ? 200 : 500, ['ok' => $ok]);
