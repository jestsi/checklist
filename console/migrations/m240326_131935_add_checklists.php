<?php

use yii\db\Migration;

/**
 * Class m240326_131935_add_checklists
 */
class m240326_131935_add_checklists extends Migration
{
    public function safeUp()
    {
        $this->createTable('{{%checklists}}', [
            'id' => $this->primaryKey(),
            'name' => $this->string()->notNull(),
            'description' => $this->text(),
            'created_at' => $this->timestamp()->defaultExpression('CURRENT_TIMESTAMP'),
            'updated_at' => $this->timestamp()->defaultExpression('CURRENT_TIMESTAMP'),
        ]);
    }

    public function safeDown()
    {
        $this->dropTable('{{%checklists}}');
    }
}
