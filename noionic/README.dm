cordova && angular without ionic!

index.html:
```html
<!DOCTYPE html>
<html ng-app="c_a">
    <head>
        <!--
        Customize this policy to fit your own app's needs. For more guidance, see:
            https://github.com/apache/cordova-plugin-whitelist/blob/master/README.md#content-security-policy
        Some notes:
            * gap: is required only on iOS (when using UIWebView) and is needed for JS->native communication
            * https://ssl.gstatic.com is required only on Android and is needed for TalkBack to function properly
            * Disables use of inline scripts in order to mitigate risk of XSS vulnerabilities. To change this:
                * Enable inline JS: add 'unsafe-inline' to default-src
        -->
        <meta http-equiv="Content-Security-Policy" content="default-src 'self' data: gap: https://ssl.gstatic.com 'unsafe-eval'; style-src 'self' 'unsafe-inline'; media-src *; img-src 'self' data: content:;">
        <meta name="format-detection" content="telephone=no">
        <meta name="msapplication-tap-highlight" content="no">
        <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width">
        <link rel="stylesheet" type="text/css" href="css/index.css">
        <title>no ionic</title>
    </head>
    <body ng-controller="ACController" ng-init="start()">
        <div class="app">
            <p>
				<h1>{{c_a_label}}</h1>
			</p>
			<p>
				<div id="deviceready" class="blink" ng-click="changeLabel()">
					<p class="event listening">Connecting to Device</p>
					<p class="event received">Device is Ready</p>
				</div>
			</p>
            
        </div>
        <script type="text/javascript" src="cordova.js"></script>
		<script type="text/javascript" src="lib/angularjs/angular.min.js"></script>
        <script type="text/javascript" src="js/index.js"></script>
    </body>
</html>
```

index.js
```javascript
angular.module("c_a", []) 
.controller("ACController", function($scope) {
	//check online, offline (sto in ascolto degli eventi, se si è in uno stato si rimane in ascolto dell'altro)
	//funzione che carica un compoonente che aggiunge funzioni e variabili nello scope (lo fa dopo averlo pulito, magari viene fatto con l'evento before exit?) e una funzione che carica il template
	//registrazione di tutti gli eventi mouse, quelli della view li creo io
	
	var number = 2;
	$scope.start = () => {
		$scope.c_a_label = 'cordova label';
	}
	
	$scope.changeLabel = () => {
		$scope.c_a_label = 'cordova label '+number;
		number++;
	} 
});
```
