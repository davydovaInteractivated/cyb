import { createContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Utils */
import {
    // addCollectionAndDocuments,
    getCollection,
} from "../utils/firebase";

/** Api */
// import { servicesData } from '../api/services';

export const ServicesContext = createContext({
    services: [],
    filteredServices: [],
    activeService: null,
    sortDirection: 1,
    searchValue: '',
    markedCount: 0,
});

export const ServicesContextProvider = ({ children }) => {
    const [services, setServices] = useState([]);
    const [filteredServices, setFilteredServices] = useState([]);
    const [activeService, setActiveService] = useState(null);
    const [markedCount, setMarkedCount] = useState(0);
    const [sortDirection, setSortDirection] = useState(1);
    const [searchValue, setSearchValue] = useState('');

    const { pathname } = useLocation();
    const onFavorites = pathname === '/favorites';

    /**
     * Get Services
     */
    const getServices = async () => {
        const data = await getCollection('services');
        console.log('services data', data);

        setServices(data);
        setFilteredServices(data);
    };

    useEffect(() => {
        // addCollectionAndDocuments('services', servicesData);
        getServices();
    }, []);

    useEffect(() => {
        filter({ data: services, sortDirection, searchValue });
    // eslint-disable-next-line
    }, [onFavorites, services, sortDirection, searchValue]);

    /**
     * Mark Service
     * @param {Boolean} isMarked
     * @param {Number} serviceId
     */
    const markService = (isMarked, serviceId) => {
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
    const search = (event) => {
        const sValue = event.target.value.toLocaleLowerCase();
        setSearchValue(sValue);
    };
    
    /**
     * Sort Services
     */
    const sort = () => {
        const newSortDirection = sortDirection <= 0 ? sortDirection + 1 : sortDirection - 2;
        setSortDirection(newSortDirection);
    }
    
    /**
     * Filter Services
     * @param {*} param0
     */
    const filter = ({
        data,
        searchValue,
        sortDirection,
    }) => {
        let filteredServices = [...(data || [])];
    
        /** Search Cards */
        if (searchValue) {
            filteredServices = filteredServices
                .filter((service) => service.title.toLocaleLowerCase().includes(searchValue));
        }

        /** Sort Cards */
        if (sortDirection) {
            filteredServices = sortDirection === 1
                ? [...(filteredServices || [])]
                .sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()))
                : [...(filteredServices || [])]
                .sort((a, b) => b.title.toLowerCase().localeCompare(a.title.toLowerCase()));
        }

        if (onFavorites) {
            filteredServices = filteredServices
                .filter((service) => service.is_marked);
        }
    
        setFilteredServices(filteredServices);
    };

    /**
     * Get Service
     * @param {string} id 
     * @returns 
     */
    const getService = (Id) => services
        .find((serv) => serv.id === Id) || null;

    const value = {
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
