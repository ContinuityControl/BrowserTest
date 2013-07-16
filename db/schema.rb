# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20130715165219) do

  create_table "user_data", force: true do |t|
    t.string   "email_address"
    t.string   "user_agent_string"
    t.string   "window_size"
    t.string   "screen_size"
    t.string   "operating_system"
    t.string   "web_browser"
    t.string   "flash_enabled"
    t.string   "date"
    t.string   "ip_address"
    t.string   "honeypot"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
