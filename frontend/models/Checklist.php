<?php

namespace frontend\models;

use yii\db\ActiveRecord;

class Checklist extends ActiveRecord
{
    public static function tableName(): string
    {
        return "checklists";
    }

    public function rules(): array
    {
        return [
            [['name'], 'required'], // Убедитесь, что поле name обязательное
            [['description', 'created_at', 'updated_at'], 'safe']
        ];
    }

    public function getItems(): \yii\db\ActiveQuery
    {
        return $this->hasMany(ChecklistItems::class, ['checklist_id' => 'id']);
    }
}