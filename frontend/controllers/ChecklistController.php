<?php

namespace frontend\controllers;

use frontend\models\Checklist;
use yii\data\ActiveDataProvider;
use yii\filters\AccessControl;
use yii\filters\auth\HttpBearerAuth;
use yii\filters\Cors;
use yii\filters\VerbFilter;
use yii\rest\ActiveController;
use yii\web\NotFoundHttpException;

class ChecklistController extends ActiveController
{
    public $modelClass = 'frontend\models\Checklist';

    public function actionChecklistItems($id): array
    {
        // Находим чеклист по его идентификатору
        $checklist = Checklist::findOne($id);

        if (!$checklist) {
            throw new NotFoundHttpException("Checklist with ID $id not found");
        }

        // Получаем связанные с чеклистом элементы чеклиста
        return $checklist->getItems()->all();
    }
}