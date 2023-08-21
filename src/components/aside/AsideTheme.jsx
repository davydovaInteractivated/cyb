const AsideTheme = ({ theme, selectTheme }) => {
    const { colors, name } = theme;
    const { light, dark } = colors;
    const themeLabel = name.replace('_', ' ');

    return (
        <span
            className='aside--settings__theme flex align-center'
            onClick={() => selectTheme(theme)}
        >
        <span>{themeLabel}</span>
            <span
                className='aside--settings__theme-color'
                style={{ background: `linear-gradient(90deg, ${light}, ${dark})` }}
            ></span>
        </span>
    );
}

export default AsideTheme;