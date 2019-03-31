defmodule MarketingWeb.PageController do
  use MarketingWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end

  def email(conn, _params) do
    # TODO: async endpoint for signing up for email updates
  end
end
