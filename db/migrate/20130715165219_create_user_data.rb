class CreateUserData < ActiveRecord::Migration
  def change
    create_table :user_data do |t|
      t.string :email_address
      t.string :user_agent_string
      t.string :window_size
      t.string :screen_size
      t.string :operating_system
      t.string :web_browser
      t.string :flash_enabled
      t.string :date
      t.string :ip_address
      t.string :honeypot
      t.string :continuity_site
      t.string :other_sites

      t.timestamps
    end
  end
end