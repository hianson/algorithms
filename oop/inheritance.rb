# http://rubylearning.com/satishtalim/ruby_inheritance.html

module Chatty
  def chat
    puts "*yada yada yada*"
  end
end

class Animal
  attr_accessor :foods_eaten
  def initialize
    @foods_eaten = []
  end

  def sleep
    puts "Zzz..."
  end

  def eat(food)
    @foods_eaten.push(food)
  end
end

class Monkey < Animal
  include Chatty
  # reader/writers
  attr_accessor :name, :species, :password

  def initialize(name, species, password)
    super() # inherit the foods_eaten property
    @name = name
    @species = species
    @password = encrypt(password)
  end

  private
  def encrypt(input)
    input.reverse
  end
end

jojo = Monkey.new("Jojo", "Chimp", "iloveyou")

jojo.name
jojo.password
jojo.chat
jojo.sleep
jojo.eat('banana')
jojo.eat('apple')

# only an instance's methods are available outside of it, so we'd have to make getter methods to have access to an instance's properties

# .new is same as initialize method
