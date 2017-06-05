
class BaseApiController < ApplicationController
  before_filter :parse_request
  private
  def parse_request
    body = request.body.read
    @json = JSON.parse(body) unless body.presence.nil?
  end
end
