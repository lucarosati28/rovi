class EventsLoader {
    constructor() {
        this.container = document.getElementById('events-container');
        this.init();
    }

    init() {
        this.loadContent();
    }

    loadContent() {
        const content = `
            <section id="events" class="section-events">
                <div class="container">
                    <div class="section-header animate fade-in">
                        <h2>Eventi</h2>
                        <p>Scopri il nostro calendario di eventi culturali e formativi</p>
                    </div>
                    <div class="events-grid">
                        <div class="event-card animate fade-in-up" style="animation-delay: 200ms;">
                            <div class="event-image">
                                <img src="/api/placeholder/600/400" alt="Workshop Design">
                                <span class="event-category formazione">Workshop</span>
                            </div>
                            <div class="event-content">
                                <div class="event-date">15 Feb 2025</div>
                                <h3 class="event-title">Workshop Design Thinking</h3>
                                <p class="event-description">Un workshop pratico sui principi del Design Thinking.</p>
                                <div class="event-details">
                                    <div class="event-detail">
                                        <i>🕒</i>
                                        <span>14:00 - 18:00</span>
                                    </div>
                                    <div class="event-detail">
                                        <i>👥</i>
                                        <span>20 posti disponibili</span>
                                    </div>
                                </div>
                                <div class="event-footer">
                                    <div class="event-price">€50</div>
                                    <div class="event-spots">Posti disponibili</div>
                                </div>
                            </div>
                        </div>

                        <div class="event-card animate fade-in-up" style="animation-delay: 400ms;">
                            <div class="event-image">
                                <img src="/api/placeholder/600/400" alt="Networking">
                                <span class="event-category networking">Networking</span>
                            </div>
                            <div class="event-content">
                                <div class="event-date">20 Feb 2025</div>
                                <h3 class="event-title">Aperitivo Networking</h3>
                                <p class="event-description">Serata di networking per professionisti creativi.</p>
                                <div class="event-details">
                                    <div class="event-detail">
                                        <i>🕒</i>
                                        <span>18:30 - 21:00</span>
                                    </div>
                                    <div class="event-detail">
                                        <i>👥</i>
                                        <span>30 posti disponibili</span>
                                    </div>
                                </div>
                                <div class="event-footer">
                                    <div class="event-price">€15</div>
                                    <div class="event-spots">Posti disponibili</div>
                                </div>
                            </div>
                        </div>

                        <div class="event-card animate fade-in-up" style="animation-delay: 600ms;">
                            <div class="event-image">
                                <img src="/api/placeholder/600/400" alt="Arte">
                                <span class="event-category cultura">Cultura</span>
                            </div>
                            <div class="event-content">
                                <div class="event-date">25 Feb 2025</div>
                                <h3 class="event-title">Mostra Arte Digitale</h3>
                                <p class="event-description">Esposizione di artisti digitali emergenti.</p>
                                <div class="event-details">
                                    <div class="event-detail">
                                        <i>🕒</i>
                                        <span>10:00 - 20:00</span>
                                    </div>
                                    <div class="event-detail">
                                        <i>👥</i>
                                        <span>Ingresso Libero</span>
                                    </div>
                                </div>
                                <div class="event-footer">
                                    <div class="event-price">Gratuito</div>
                                    <div class="event-spots">Accesso Libero</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;

        this.container.innerHTML = content;
    }
}

// Initialize
new EventsLoader();