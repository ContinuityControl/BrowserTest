class CreateUserData < ActiveRecord::Migration
  def change
    create_table :user_data do |t|
      t.string :user_agent_string
      t.string :window_size

      t.timestamps
    end
  end
end
