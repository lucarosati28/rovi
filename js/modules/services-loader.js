class ServicesLoader {
    constructor() {
        this.container = document.getElementById('services-container');
        this.init();
    }

    init() {
        this.loadContent();
    }

    loadContent() {
        const content = `
            <section id="services" class="section-services">
                <div class="container">
                    <div class="section-header animate fade-in">
                        <h2>I Servizi Previsti</h2>
                        <p>Un ecosistema integrato di spazi e servizi per la comunità</p>
                    </div>
                    <div class="services-grid">
                        <div class="service-card animate fade-in-up" style="animation-delay: 200ms;">
                            <div class="service-icon">💼</div>
                            <h3 class="service-title">Spazio Coworking</h3>
                            <p class="service-description">Postazioni di lavoro professionali in un ambiente stimolante e collaborativo.</p>
                            <div class="service-features">
                                <ul>
                                    <li>12 postazioni fisse dedicate</li>
                                    <li>3 postazioni flex</li>
                                    <li>Sale riunioni attrezzate</li>
                                    <li>Internet ultraveloce</li>
                                    <li>Area relax e networking</li>
                                </ul>
                            </div>
                        </div>

                        <div class="service-card featured animate fade-in-up" style="animation-delay: 400ms;">
                            <div class="service-icon">🎯</div>
                            <h3 class="service-title">Eventi e Formazione</h3>
                            <p class="service-description">Spazio polivalente per eventi culturali e percorsi formativi.</p>
                            <div class="service-features">
                                <ul>
                                    <li>Eventi culturali e musicali</li>
                                    <li>Workshop creativi</li>
                                    <li>Corsi di formazione</li>
                                    <li>Presentazioni e talk</li>
                                    <li>Eventi di networking</li>
                                </ul>
                            </div>
                        </div>

                        <div class="service-card animate fade-in-up" style="animation-delay: 600ms;">
                            <div class="service-icon">🌐</div>
                            <h3 class="service-title">Hub per il Territorio</h3>
                            <p class="service-description">Centro di innovazione e sviluppo per la comunità locale.</p>
                            <div class="service-features">
                                <ul>
                                    <li>Sviluppo progetti territoriali</li>
                                    <li>Supporto alle associazioni</li>
                                    <li>Valorizzazione cultura locale</li>
                                    <li>Spazio per la comunità</li>
                                    <li>Network professionale</li>
                                </ul>
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
new ServicesLoader();