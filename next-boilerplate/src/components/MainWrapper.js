import mainConfigs from "../configs/main-menu.json";

import HeaderContainer from "../containers/HeaderContainer";
import RowContainer from "../containers/RowContainer";

const MainWrapper = ({
  children,
  bgImg,
  darkBgImg,
  hasHeader,
  hasMenu,
  isDarkLogo,
  theme,
  rowWidth,
}) => (
  <>
    {hasHeader !== false ? (
      <HeaderContainer
        opt={{
          mainMenuStatus: mainConfigs.menu.status,
          logoSvg: "logotipoSvg",
          bgOne: "transparent",
          bgTwo: "transparent",
          classes: "header-block",
          hasMenu: hasMenu,
          isDarkLogo: isDarkLogo,
        }}
        mainMenu={mainConfigs.menu.items}
      />
    ) : null}
    <div
      className={"main-wrapper"}
      style={{
        backgroundImage: `url(${theme !== "dark" ? bgImg : darkBgImg})`,
        backgroundRepeat: "repeat",
        backgroundSize: "500px 500px",
        backgroundPosition: "bottom",
      }}
    >
      <RowContainer
        opt={{
          classes: "main-wrapper-inner",
          isBoxed: false,
          // bgColor: "#fff",
          rowWidth: rowWidth,
        }}
      >
        <main className='main-container'>{children}</main>
      </RowContainer>
    </div>
  </>
);

export default MainWrapper;
