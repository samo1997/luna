import styled from 'styled-components'

export const StarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  height: 27px;
  width: 54%;
`

export const FullStarWrapper = styled.div`
  height: 27px;
  width: 24.42px;
`

export const EmptyStarWrapper = styled(FullStarWrapper)``
