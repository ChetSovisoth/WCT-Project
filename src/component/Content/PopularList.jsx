import { useMediaQuery } from "react-responsive";
const PopularList = () => {
    const isSmallScreen =  useMediaQuery({ query: '(min-width: 0) and (max-width: 814px)' });
    const isMediumScreen = useMediaQuery({ query: '(min-width: 1200px) and (max-width: 1699px)' });
  return (
    <>
      {
        (isSmallScreen || isMediumScreen) ?
          ""
        :
          ""
      }
    </>
  )
}

export default PopularList