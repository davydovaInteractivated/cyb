import React, { PropsWithChildren, useCallback } from "react";
import { createContext, useState, useEffect, useContext } from "react";
import { useLocation } from 'react-router-dom';

/** Contexts */
import { OverlayContext } from "./overlay.context";
import { SettingsContext, TLangsKeys } from "./settings.context";

/** Utils */
import {
    // addCollectionAndDocuments,
    getCollection,
} from "../utils/firebase";

/** Api */
// import { servicesData } from '../api/services';

/** Types */
import { TCustomSortDirection } from '../ts/types/custom';

export type TService = {
    id: string,
    title: {
        ru: string,
        en: string,
        ua: string,
    }
    description: string,
    is_marked: boolean,
    references: TServiceRef[],
    logos: TServiceLogo[],
};

export type TServiceRef = {
    url: string,
    src: string,
};

export type TServiceLogo = {
    alt: string,
    src: string,
    url: string,
};

interface IServicesContextProps {
    services: TService[],
    filteredServices: TService[],
    activeService: TService | null,
    sortDirection: TCustomSortDirection,
    searchValue: string,
    markedCount: number,
    setServices: (data: TService[]) => void,
    setActiveService: (data: TService) => void,
    setSortDirection: (data: TCustomSortDirection) => void,
    setSearchValue: (data: string) => void,
    setMarkedCount: (data: number) => void,
    markService: (isMarked: boolean, serviceId: string) => void | undefined,
    search: (event: React.ChangeEvent<HTMLInputElement>) => void | undefined,
    sort: () => void | undefined,
    getService: (Id: string | null, services: TService[]) => TService | null,
}

/**
 * Get Service
 * @param {String} Id 
 * @returns {TService | null}
 */
const getService = (Id: string | null, services: TService[]): TService | null => services
    .find((serv) => serv.id === Id) || null;

export const ServicesContext = createContext<IServicesContextProps>({
    services: [],
    filteredServices: [],
    activeService: null,
    sortDirection: 1,
    searchValue: '',
    markedCount: 0,
    setServices: () => {},
    setActiveService: () => {},
    setSortDirection: () => {},
    setSearchValue: () => {},
    setMarkedCount: () => {},
    markService: () => {},
    search: () => {},
    sort: () => {},
    getService,
});

export const ServicesContextProvider = ({ children }: PropsWithChildren) => {
    const [services, setServices] = useState([] as TService[]);
    const [filteredServices, setFilteredServices] = useState([] as TService[]);
    const [activeService, setActiveService] = useState(null as TService | null);
    const [markedCount, setMarkedCount] = useState(0);
    const [sortDirection, setSortDirection] = useState<TCustomSortDirection>(1);
    const [searchValue, setSearchValue] = useState('');

    const { pathname } = useLocation();
    const onFavorites = pathname === '/favorites';

    const { setShow, setType } = useContext(OverlayContext);
    const { activeLang } = useContext(SettingsContext);

    /**
     * Filter Services
     * @param {*} param0
     */
    const filter = useCallback(({
        data,
        searchValue,
        sortDirection,
    }: {
        data: TService[],
        searchValue: string,
        sortDirection: TCustomSortDirection,
    }) => {
        let filteredServices = [...(data || [])];
    
        /** Search Cards */
        if (searchValue) {
            filteredServices = filteredServices
                .filter((service: TService) => service.title[activeLang as TLangsKeys].toLocaleLowerCase().includes(searchValue));
        }

        /** Sort Cards */
        if (sortDirection) {
            filteredServices = sortDirection === 1
                ? [...(filteredServices || [])]
                .sort((a, b) => a.title[activeLang as TLangsKeys].toLowerCase().localeCompare(b.title[activeLang as TLangsKeys].toLowerCase()))
                : [...(filteredServices || [])]
                .sort((a, b) => b.title[activeLang as TLangsKeys].toLowerCase().localeCompare(a.title[activeLang as TLangsKeys].toLowerCase()));
        }

        if (onFavorites) {
            filteredServices = filteredServices
                .filter((service) => service.is_marked);
        }
    
        setFilteredServices(filteredServices);
    }, [onFavorites, activeLang]);

    useEffect(() => {
        // addCollectionAndDocuments('services', servicesData);
        /**
         * Get Services
         */
        const getServices = async () => {
            setType('loader');
            setShow(true);
            const data = await getCollection('services');
            // const data = servicesData;
            console.log('services data', data);
    
            setTimeout(() => {
                setServices(data as typeof data & TService[]);
                setFilteredServices(data as typeof data & TService[]);
                setShow(false);
                setType('overlay');
            }, 2000);
        };

        getServices();
    // eslint-disable-next-line
    }, []);

    useEffect(() => {
        filter({ data: services, sortDirection, searchValue });
    }, [onFavorites, services, sortDirection, searchValue, filter]);

    /**
     * Mark Service
     * @param {Boolean} isMarked
     * @param {String} serviceId
     */
    const markService = (isMarked: boolean, serviceId: string) => {
        const servicesDataCopy = [...services];
        const currentServiceDataIndex = servicesDataCopy
            .findIndex((card) => card.id === serviceId);
    
        if (currentServiceDataIndex === -1) return;
    
        servicesDataCopy[currentServiceDataIndex] = {
            ...servicesDataCopy[currentServiceDataIndex],
            is_marked: isMarked,
        };

        /** Update Active Service */
        if (serviceId === activeService?.id) {
            setActiveService({
                ...activeService,
                is_marked: isMarked,
            });
        }
    
        setServices(servicesDataCopy);
        setMarkedCount(isMarked ? markedCount + 1: markedCount - 1);
    };

    /**
     * Search Services
     * @param {Event} event
     */
    const search = (event: { target: { value: string} }) => {
        const sValue = event.target.value.toLocaleLowerCase();
        setSearchValue(sValue);
    };
    
    /**
     * Sort Services
     */
    const sort = () => {
        const newSortDirection = sortDirection <= 0 ? sortDirection + 1 : sortDirection - 2;
        setSortDirection(newSortDirection as TCustomSortDirection);
    }

    const value: IServicesContextProps = {
        services,
        setServices,
        filteredServices,
        activeService,
        setActiveService,
        sortDirection,
        setSortDirection,
        searchValue,
        setSearchValue,
        markedCount,
        setMarkedCount,

        markService,
        search,
        sort,
        getService,
    };

    return (
        <ServicesContext.Provider
            value={value}
        >{children}</ServicesContext.Provider>
    )
};
