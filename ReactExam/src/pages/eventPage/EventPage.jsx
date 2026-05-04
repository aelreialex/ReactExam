import React, { useEffect, useState } from 'react'
import { useTickets } from '../../hooks/useStoreTickets';
import EventGridInfoCard from '../../components/eventGridInfoCard/EventGridInfoCard';
import "./eventPage.css"
import SearchBar from '../../components/searchBar/SearchBar';

const EventPage = () => {
    const bands = useTickets(state => state.fetchTickets);
    const tickets = useTickets(state => state.tickets.events);
    const { isLoading, isError } = useTickets();

    useEffect(() => {
        bands();
    }, [bands])


    if (isLoading) return <div>Laddar filmer...</div>;
    if (isError) return <div>Något gick fel.</div>;

    console.log(tickets)
  return (
    <main className="eventPage">
        <h1 className="eventPage__h1">Events</h1>
        <SearchBar />
        <section className="eventPage__events">
          {tickets?.map(({name, when, id, where, price}) => (
              <EventGridInfoCard name={name} price={price} where={where} when={when.date} startWhen={when.from} endWhen={when.to} key={id} id={id}/>
            ))}
        </section>
    </main>
  )
}
export default EventPage