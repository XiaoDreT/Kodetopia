<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>React in Laravel</title>
    @viteReactRefresh
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />

    <!-- Styles / Scripts -->
    @if (file_exists(public_path('build/manifest.json')) || file_exists(public_path('hot')))
        @vite(['resources/css/app.css', 'resources/js/app.jsx'])
    @endif
</head>
<body>
<div id="app"></div>
</body>
</html>
