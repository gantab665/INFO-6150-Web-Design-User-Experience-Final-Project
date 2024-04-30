import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const CounterSection = () => {
    const [ref, inView] = useInView({ triggerOnce: true });

    const [counters, setCounters] = useState({
        travels: 0,
        clients: 0,
        employees: 0,
        countries: 0,
    });

    useEffect(() => {
        if (inView) {
            // Set your target values for the counters
            const targetCounters = {
                travels: 9313,
                clients: 8492,
                employees: 100,
                countries: 120,
            };

            // Duration for the counter animation (in milliseconds)
            const duration = 2000;

            // Calculate the step for each counter based on the duration
            const step = {
                travels: targetCounters.travels / duration,
                clients: targetCounters.clients / duration,
                employees: targetCounters.employees / duration,
                countries: targetCounters.countries / duration,
            };

            // Initialize the counters
            let currentCounters = {
                travels: 0,
                clients: 0,
                employees: 0,
                countries: 0,
            };

            // Start the counter animation
            const counterInterval = setInterval(() => {
                currentCounters = {
                    travels: Math.min(targetCounters.travels, currentCounters.travels + step.travels),
                    clients: Math.min(targetCounters.clients, currentCounters.clients + step.clients),
                    employees: Math.min(targetCounters.employees, currentCounters.employees + step.employees),
                    countries: Math.min(targetCounters.countries, currentCounters.countries + step.countries),
                };

                setCounters(currentCounters);

                if (
                    currentCounters.travels >= targetCounters.travels &&
                    currentCounters.clients >= targetCounters.clients &&
                    currentCounters.employees >= targetCounters.employees &&
                    currentCounters.countries >= targetCounters.countries
                ) {
                    // Stop the interval once all counters reach their targets
                    clearInterval(counterInterval);
                }
            }, 16);

            return () => {
                // Cleanup function to clear the interval when the component unmounts
                clearInterval(counterInterval);
            };
        }
    }, [inView]);

    return (
        <div ref={ref} className="untree_co-section count-numbers py-5">
            <div className="container text-center">
                <div className="row">
                    <div className="col-6 col-sm-6 col-md-6 col-lg-3 ">
                        <div className="counter-wrap">
                            <div className="counter text-primary">
                                <span className="" data-number={counters.travels.toFixed(0)}>
                                    {counters.travels.toFixed(0)}{' '}
                                </span>
                            </div>
                            <span className="caption">No. of Travels</span>
                        </div>
                    </div>
                    <div className="col-6 col-sm-6 col-md-6 col-lg-3">
                        <div className="counter-wrap">
                            <div className="counter text-primary">
                                <span className="" data-number={counters.clients.toFixed(0)}>
                                    {counters.clients.toFixed(0)}
                                </span>
                            </div>
                            <span className="caption">No. of Clients</span>
                        </div>
                    </div>
                    <div className="col-6 col-sm-6 col-md-6 col-lg-3">
                        <div className="counter-wrap">
                            <div className="counter text-primary">
                                <span className="" data-number={counters.employees.toFixed(0)}>
                                    {counters.employees.toFixed(0)}
                                </span>
                            </div>
                            <span className="caption">No. of Employees</span>
                        </div>
                    </div>
                    <div className="col-6 col-sm-6 col-md-6 col-lg-3">
                        <div className="counter-wrap">
                            <div className="counter text-primary">
                                <span className="" data-number={counters.countries.toFixed(0)}>
                                    {counters.countries.toFixed(0)}
                                </span>
                            </div>
                            <span className="caption">No. of Countries</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CounterSection;
