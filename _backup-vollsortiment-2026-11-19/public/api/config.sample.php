<?php
// Vorlage: auf dem Server als config.php kopieren und Werte eintragen. config.php gehört NICHT ins Git-Repository.
return [
  'mail_to'   => 'info@buday.com',            // TODO: Empfänger bestätigen
  'mail_from' => 'website@topex-systems.com', // Absender muss ein Postfach der Domain sein
  'allowed_origins' => ['https://topex-systems.com', 'https://www.topex-systems.com'],
];
