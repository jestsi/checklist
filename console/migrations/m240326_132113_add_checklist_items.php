<?php

use yii\db\Migration;

/**
 * Class m240326_132113_add_checklist_items
 */
class m240326_132113_add_checklist_items extends Migration
{
    public function safeUp()
    {
        $this->createTable('{{%checklist_items}}', [
            'id' => $this->primaryKey(),
            'checklist_id' => $this->integer()->notNull(),
            'title' => $this->string(255)->notNull(),
            'description' => $this->text(),
            'completed' => $this->boolean()->defaultValue(false),
            'created_at' => $this->timestamp()->defaultExpression('CURRENT_TIMESTAMP'),
            'updated_at' => $this->timestamp()->defaultExpression('CURRENT_TIMESTAMP'),
        ]);

        // Add foreign key for `checklist_id`
        $this->addForeignKey(
            'fk-checklist_items-checklist_id',
            '{{%checklist_items}}',
            'checklist_id',
            '{{%checklists}}',
            'id',
            'CASCADE'
        );
    }

    public function safeDown()
    {
        $this->dropForeignKey(
            'fk-checklist_items-checklist_id',
            '{{%checklist_items}}'
        );

        // Drop the table
        $this->dropTable('{{%checklist_items}}');
    }
}
