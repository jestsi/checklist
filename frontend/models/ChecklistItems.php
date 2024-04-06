<?php

namespace frontend\models;

use yii\db\ActiveRecord;

class ChecklistItems extends ActiveRecord
{
    public static function tableName(): string
    {
        return "checklist_items";
    }

    public function rules(): array
    {
        return [
            [['description', 'completed', 'created_at', 'updated_at', 'title', 'checklist_id'], 'safe']
        ];
    }
}