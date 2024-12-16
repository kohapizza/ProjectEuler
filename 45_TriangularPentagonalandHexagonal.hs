triangles :: [Int]
triangles = [n*(n + 1) `div` 2 | n <- [1..] ]

pentagonals :: [Int]
pentagonals = [n*(3*n - 1) `div` 2 | n <- [1..] ]

hexagonals :: [Int]
hexagonals = [n*(2*n - 1) | n <- [1..] ]

getCommon :: [Int] -> [Int] -> [Int] -> [Int]
getCommon (x:xs) (y:ys) (z:zs) 
    | x == y && y == z = x : getCommon xs ys zs
    | x < y = getCommon xs (y:ys) (z:zs)
    | y < z = getCommon (x:xs) ys (z:zs)
    | otherwise = getCommon (x:xs) (y:ys) zs

main :: IO ()
main = do
    let common = take 3 $ getCommon triangles pentagonals hexagonals
    print common -- [1,40755,1533776805]