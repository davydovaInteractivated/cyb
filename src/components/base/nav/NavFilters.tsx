import { useContext } from "react";
import { withTranslation } from 'react-i18next';
/** Icons */
import { ArrowsUpDownIcon, BarsArrowDownIcon, BarsArrowUpIcon } from "@heroicons/react/24/solid";
/** Components */
import CustomButton from "../../custom/custom-button/CustomButton";
import CustomInput from "../../custom/custom-input/CustomInput";
/** Contexts */
import { ServicesContext } from "../../../context/services.context";

const NavFilters = ({ t, className = '' }: { t: any, className?: string }) => {
    const {
        sortDirection,
        searchValue,
        search,
        sort,
    } = useContext(ServicesContext);

    return (
        <div className={`nav nav--filters flex align-center ${className}`}>
            <div className="nav__list-item nav--icons nav--icons__sort">
                <CustomButton
                    className={!sortDirection ? "" : "none m-0"}
                    icon
                    onClick={sort}
                >
                    <ArrowsUpDownIcon className="icons__icon" />
                </CustomButton>
                <CustomButton
                    className={sortDirection > 0 ? "active" : "none m-0"}
                    icon
                    onClick={sort}
                >
                    <BarsArrowDownIcon className="icons__icon" />
                </CustomButton>
                <CustomButton
                    className={sortDirection < 0 ? "active" : "none m-0"}
                    icon
                    onClick={sort}
                >
                    <BarsArrowUpIcon className="icons__icon" />
                </CustomButton>
            </div>

            <div className='nav__list-item nav--search'>
                <CustomInput
                    placeholder={t('custom.input.search.placeholder')}
                    value={searchValue}
                    type="search"
                    size="small"
                    onChange={event => search(event)}
                />
            </div>
        </div>
    )
};

const NavFiltersTranslated = withTranslation('common')(NavFilters)
export default NavFiltersTranslated;
