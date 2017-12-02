def get_max_profit(stock_prices_yesterday)
  max = 0
  stocks_length = stock_prices_yesterday.length
  i = 0
  while i < stocks_length
    j = i + 1
    while j < stocks_length
      # if j > i
        if stock_prices_yesterday[j] - stock_prices_yesterday[i] > max
          max = stock_prices_yesterday[j] - stock_prices_yesterday[i]
        end
      # end
      j += 1
    end
    i += 1
  end
  return max
end

stock_prices_yesterday = [10, 7, 5, 8, 11, 9]

p get_max_profit(stock_prices_yesterday)
