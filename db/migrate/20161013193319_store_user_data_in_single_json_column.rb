class StoreUserDataInSingleJsonColumn < ActiveRecord::Migration[5.0]
  def change
    drop_table :user_data

    create_table :user_data do |t|
      t.string :email_address, null: false
      t.inet :ip_address, null: false
      t.string :honeypot
      t.jsonb :data, null: false

      t.timestamps
    end
  end
end
