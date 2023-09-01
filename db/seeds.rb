# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


5.times do
  portfolio = Portfolio.create(
    title: Faker::Lorem.words(number: 3).join(' '),
    description: Faker::Lorem.paragraph
  )

  # Create some skills associated with the portfolio
  3.times do
    skill = Skill.create(
      name: Faker::Lorem.word,
      portfolio: portfolio # Associate the skill with the portfolio
    )
  end
end

