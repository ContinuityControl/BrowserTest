class BrowserTestController < ApplicationController
  def show
    @user_datum = UserDatum.new

    get_box_view_session
  end

  private

  def get_box_view_session
    # See control/lib/box_view_api
    token = '9ckzceypfgoykacra1hd43q0gd3t88aj'
    document_id = '8d1378fb7bd646aeabfd7f987e097b8a'
    # Include typhoeus in Gemfile
    session_response = Typhoeus.post(
      'https://view-api.box.com/1/sessions',
      body: { 'document_id': document_id, 'duration': 1 }.to_json,
      headers: { 'Content-Type' => 'application/json',
                 "Authorization" => "Token #{token}"})
    parsed_response = JSON.parse(session_response.response_body)

    @box_view_session_url = parsed_response.fetch('urls').fetch('assets')
  end
end
