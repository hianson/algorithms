######## broot force
# def get_products_of_all_ints_except_at_index(arr)
#   new_arr = []
#
#   arr.each_with_index do |outer_num, outer_index|
#     product_of_other_ints = 1
#     arr.each_with_index do |inner_num, inner_index|
#       next if outer_index == inner_index
#       product_of_other_ints = product_of_other_ints * inner_num
#     end
#     new_arr << product_of_other_ints
#   end
#   return new_arr
# end
#
# arr = [1, 7, 3, 4]
#
# p get_products_of_all_ints_except_at_index(arr)

######## 'double-greedy' with backwards array traversal
# O(n) time and O(n) space
# pass thru input array two times to avoid nested loop
# get this solution by refactoring repeat work from the brute force method 

def get_products_of_all_ints_except_at_index(arr)
  raise IndexError, 'Requires at least 2 numbers' if arr.length < 2
  # get products of ints before each index
  products_of_ints_except_index = []
  product = 0
  i = 0
  while i < arr.length
    products_of_ints_except_index[i] = product
    product *= arr[i]
    i += 1
  end
  product = 0
  i = arr.length - 1
  while i >= 0
    products_of_ints_except_index *= product
    product *= arr[i]
    i -= 1
  end
  return products_of_ints_except_index
end

arr = [1, 7, 3, 4]
get_products_of_all_ints_except_at_index(arr)
