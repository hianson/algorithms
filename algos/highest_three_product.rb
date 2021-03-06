######## does not handle negative numbers
def product_of_highest_three(array_of_ints)
  first = 0
  second = 0
  third = 0
  i = 0
  while i < array_of_ints.length
    if array_of_ints[i] > first
      third = second
      second = first
      first = array_of_ints[i]
    elsif array_of_ints[i] > second
      third = second
      second = array_of_ints[i]
    elsif array_of_ints[i] > third
      third = array_of_ints[i]
    end
    i += 1
  end
  return first * second * third
end

array_of_ints = [1, 3, 6, 2, 4, 7]

p product_of_highest_three(array_of_ints)

######## handle negative numbers:
# must keep track of product of highest and lowest 2
# keep track of lowest 2 because if multiplied by another negative, it can become a greater positive number
# keep track of highest 2 to multiply by the value in each iteration
