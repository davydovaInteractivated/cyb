import { createContext, useState } from "react";

/** Api */
import { servicesData } from '../api/services';

export const ServicesContext = createContext({
    services: [],
    filteredServices: [],
    activeService: null,
    sortDirection: 0,
    searchValue: '',
    showMarked: false,
    markedCount: 0,
});

export const ServicesContextProvider = ({ children }) => {
    const [services, setServices] = useState(servicesData);
    const [filteredServices, setFilteredServices] = useState(servicesData);
    const [activeService, setActiveService] = useState(null);
    const [showMarked, setShowMarked] = useState(false);
    const [markedCount, setMarkedCount] = useState(0);
    const [sortDirection, setSortDirection] = useState(0);
    const [searchValue, setSearchValue] = useState('');

    /** ~ DidMount Hook */
    // useEffect(() => {
    //   setTimeout(() =>{
    //     setServices(servicesData);
    //     setFilteredServices(servicesData);
    //   }, 320);
    // }, []);

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
        filter({
            data: servicesDataCopy,
            searchValue,
            sortDirection,
            showMarked,
        });
    };

    /**
     * Set Marked Services
     */
    const setMarkedShow = () => {
        const newShow = !showMarked;
        setShowMarked(newShow);
        filter({ data: services, searchValue, sortDirection, showMarked: newShow });
    }

    /**
     * Search Services
     * @param {Event} event
     */
    const search = (event) => {
        const sValue = event.target.value.toLocaleLowerCase();
        setSearchValue(sValue);
        filter({ data: services, searchValue: sValue, sortDirection, showMarked });
    };
    
    /**
     * Sort Services
     */
    const sort = () => {
        const newSortDirection = sortDirection <= 0 ? sortDirection + 1 : sortDirection - 2;

        setSortDirection(newSortDirection);
        filter({ data: services, sortDirection: newSortDirection, searchValue, showMarked });
    }
    
    /**
     * Filter Services
     * @param {*} param0
     */
    const filter = ({
        data,
        searchValue,
        sortDirection,
        showMarked,
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

        if (showMarked) {
            filteredServices = filteredServices
                .filter((service) => service.is_marked);
        }
    
        setFilteredServices(filteredServices);
    };

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
        showMarked,
        setShowMarked,
        markedCount,
        setMarkedCount,

        markService,
        setMarkedShow,
        search,
        sort,
    };

    return (
        <ServicesContext.Provider
            value={value}
        >{children}</ServicesContext.Provider>
    )
};
