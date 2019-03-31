defmodule Marketing.Repo do
  use Ecto.Repo,
    otp_app: :marketing,
    adapter: Ecto.Adapters.Postgres
end
