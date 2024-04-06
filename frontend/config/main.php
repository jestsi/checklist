<?php
$params = array_merge(
    require __DIR__ . '/../../common/config/params.php',
    require __DIR__ . '/../../common/config/params-local.php',
    require __DIR__ . '/params.php',
    require __DIR__ . '/params-local.php'
);
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
return [
    'id' => 'app-frontend',
    'basePath' => dirname(__DIR__),
    'bootstrap' => ['log'],
    'controllerNamespace' => 'frontend\controllers',
    'components' => [
        'request' => [
            'csrfParam' => '_csrf-frontend',
            'baseUrl' => '',
            'parsers' => [
                'application/json' => 'yii\web\JsonParser',
            ],
        ],

        'user' => [
            'identityClass' => 'common\models\User',
            'enableAutoLogin' => true,
            'identityCookie' => ['name' => '_identity-frontend', 'httpOnly' => true],
        ],
        'session' => [
            // this is the name of the session cookie used for login on the frontend
            'name' => 'advanced-frontend',
        ],
        'log' => [
            'traceLevel' => YII_DEBUG ? 3 : 0,
            'targets' => [
                [
                    'class' => 'yii\log\FileTarget',
                    'levels' => ['error', 'warning'],
                ],
            ],
        ],
        'errorHandler' => [
            'errorAction' => 'site/error',
        ],
        'urlManager' => [
            'enablePrettyUrl' => true,
            'enableStrictParsing' => true,
            'showScriptName' => false,
            'rules' => [
                [
                    'class' => 'yii\rest\UrlRule',
                    'controller' => 'checklist',
                    'extraPatterns' => [
                        'POST' => 'create',
                        'PUT' => 'update',
                        'DELETE' => 'delete',
                        'OPTIONS' => 'options',
                        'GET <id>/items' => 'checklist-items'
                    ],
                ],
                [
                    'class' => 'yii\rest\UrlRule',
                    'controller' => 'checklist-items',
                    'extraPatterns' => [
                        'POST' => 'create',
                        'PUT' => 'update',
                        'DELETE' => 'delete',
                        'OPTIONS' => 'options'
                    ],
                ],
            ],
        ],
    ],
    'params' => $params,
];
