export const CODE_BLOCK_BUBBLE_SORT=
`for( i : 0 -> n-2 )
  for( j : 0 -> n-i-2 )
    if( a[j] > a[j+1] )
      swap( a[j] , a[j+1] )
    else
      // do nothing
// sort complete`