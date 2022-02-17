class AddVolunteerRefToChatroom < ActiveRecord::Migration[6.0]
  def change
    add_reference :chatroom, :volunteer, foreign_key: true
  end
end
