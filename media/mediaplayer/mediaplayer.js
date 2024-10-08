let selectedProvider = 'vidlink';

async function getApiKey() {
    try {
        const response = await fetch('apis/config.json');
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json().then(config => config.apiKey);
    } catch (error) {
        console.error('Failed to fetch API key:', error);
        return null;
    }
}

async function fetchJson(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    } catch (error) {
        console.error(`Failed to fetch data from ${url}:`, error);
        throw error;
    }
}

async function getMovieEmbedUrl(mediaId, provider, apiKey) {
    const primaryColor = '#FFFFFF';
    const secondaryColor = '#FFFFFF';
    const iconColor = '#FFFFFF';

    switch (provider) {
        case 'vidsrc':
            return `https://vidsrc.cc/v3/embed/movie/${mediaId}?autoPlay=true`;
        case 'vidsrc2':
            return `https://vidsrc2.to/embed/movie/${mediaId}`;
        case 'vidsrcxyz':
            return `https://vidsrc.xyz/embed/movie/${mediaId}`;
        case 'embedsoap':
            return `https://www.embedsoap.com/embed/movie/?id=${mediaId}`;
        case 'autoembed':
            return `https://player.autoembed.cc/embed/movie/${mediaId}`;
        case 'smashystream':
            return `https://player.smashy.stream/movie/${mediaId}`;
        case 'anime':
            return `https://anime.autoembed.cc/embed/${mediaId}-episode-1`;
        case '2animesub':
            return `https://2anime.xyz/embed/${mediaId}-episode-1`;
        case '2embed':
            return `https://www.2embed.cc/embed/${mediaId}`;
        case 'nontonGo':
            return `https://www.NontonGo.win/embed/movie/${mediaId}`;
        case 'AdminHiHi':
            const movieSlug = mediaId.replace(/\s+/g, '-');
            return `https://embed.anicdn.top/v/${movieSlug}-dub/1.html`;
        case 'vidlink':
            return `https://vidlink.pro/movie/${mediaId}?primaryColor=${primaryColor}&secondaryColor=${secondaryColor}&iconColor=${iconColor}&autoplay=false`;
        case 'vidlinkdub':
            return `https://vidlink.pro/movie/${mediaId}?player=jw&multiLang=true&primaryColor=${primaryColor}&secondaryColor=${secondaryColor}&iconColor=${iconColor}`;
        case 'vidsrcnl':
            return `https://player.vidsrc.nl/embed/movie/${mediaId}`;
        case 'vidsrc.rip':
            return `https://vidsrc.rip/embed/movie/${mediaId}`;
        case 'vidbinge':
            return `https://vidbinge.dev/embed/movie/${mediaId}`;
        case 'moviesapi':
            return `https://moviesapi.club/movie/${mediaId}`;
        case 'moviee':
            return `https://moviee.tv/embed/movie/${mediaId}`;
        case 'multiembed':
            return `https://multiembed.mov/?video_id=${mediaId}&tmdb=1`;
        case 'multiembedvip':
            return `https://multiembed.mov/directstream.php?video_id=${mediaId}&tmdb=1`;
        case 'vidsrcicu':
            return `https://vidsrc.icu/embed/movie/${mediaId}`;  // New URL structure
        default:
            throw new Error('Provider not recognized.');
    }
}


async function getTvEmbedUrl(mediaId, seasonId, episodeId, provider, apiKey) {
    const primaryColor = '#FFFFFF';
    const secondaryColor = '#FFFFFF';
    const iconColor = '#ffffff';

    switch (provider) {
        case 'vidsrc':
            return `https://vidsrc.cc/v3/embed/tv/${mediaId}/${seasonId}/${episodeId}?autoPlay=true&autoNext=true`;
        case 'vidsrcpro':
            return `https://vidsrc.pro/embed/tv/${mediaId}/${seasonId}/${episodeId}`;
        case 'vidsrc2':
            return `https://vidsrc2.to/embed/tv/${mediaId}?season=${seasonId}&episode=${episodeId}`;
        case 'vidsrcxyz':
            return `https://vidsrc.xyz/embed/tv/${mediaId}?season=${seasonId}&episode=${episodeId}`;
        case 'embedsoap':
            return `https://www.embedsoap.com/embed/tv/?id=${mediaId}&s=${seasonId}&e=${episodeId}`;
        case 'autoembed':
            return `https://player.autoembed.cc/embed/tv/${mediaId}/${seasonId}/${episodeId}`;
        case 'smashystream':
            return `https://player.smashy.stream/tv/${mediaId}?s=${seasonId}&e=${episodeId}`;
        case 'anime':
            return `https://anime.autoembed.cc/embed/${media.name.replace(/\s+/g, '-').toLowerCase()}-episode-${episodeId}`;
        case 'nontonGo':
            return `https://www.NontonGo.win/embed/tv/${mediaId}/${seasonId}/${episodeId}`;
        case 'nontonGoAlt':
            return `https://www.NontonGo.win/embed/tv/?id=${mediaId}&s=${seasonId}&e=${episodeId}`;
        case '2animesub':
            return `https://2anime.xyz/embed/${media.name.replace(/\s+/g, '-').toLowerCase()}-episode-${episodeId}`;
        case '2embed':
            return `https://www.2embed.skin/embedtv/${mediaId}&s=${seasonId}&e=${episodeId}`;
        case 'AdminHiHi':
            const tvSlug = media.name.replace(/\s+/g, '-');
            return `https://embed.anicdn.top/v/${tvSlug}-dub/${episodeId}.html`;
        case 'moviesapi':
            return `https://moviesapi.club/tv/${mediaId}/${seasonId}/${episodeId}`;
        case 'vidlink':
            return `https://vidlink.pro/tv/${mediaId}/${seasonId}/${episodeId}?primaryColor=${primaryColor}&secondaryColor=${secondaryColor}&iconColor=${iconColor}&nextbutton=true&autoplay=false`;
        case 'vidlinkdub':
            return `https://vidlink.pro/tv/${mediaId}/${seasonId}/${episodeId}?player=jw&multiLang=true`;
        case 'vidsrcnl':
            return `https://player.vidsrc.nl/embed/tv/${mediaId}/${seasonId}/${episodeId}`;
        case 'vidsrc.rip':
            return `https://vidsrc.rip/embed/tv/${mediaId}/${seasonId}/${episodeId}`;
        case 'vidbinge':
            return `https://vidbinge.dev/embed/tv/${mediaId}/${seasonId}/${episodeId}`;
        case 'moviee':
            return `https://moviee.tv/embed/tv/${mediaId}?seasion=${seasonId}&episode=${episodeId}`;
        case 'multiembed':
            return `https://multiembed.mov/?video_id=${mediaId}&tmdb=1&s=${seasonId}&e=${episodeId}`;
        case 'multiembedvip':
            return `https://multiembed.mov/directstream.php?video_id=${mediaId}&tmdb=1&s=${seasonId}&e=${episodeId}`;
        case 'vidsrcicu':
            return `https://vidsrc.icu/embed/tv/${mediaId}/${seasonId}/${episodeId}`;
        default:
            throw new Error('Provider not recognized.');
    }
}



async function fetchMediaData(mediaId, mediaType, apiKey) {
    return fetchJson(`https://api.themoviedb.org/3/${mediaType}/${mediaId}?api_key=${apiKey}`);
}

async function fetchCastData(mediaId, mediaType, apiKey) {
    return fetchJson(`https://api.themoviedb.org/3/${mediaType}/${mediaId}/credits?api_key=${apiKey}`);
}

async function fetchTrailer(mediaId, mediaType, apiKey) {
    const data = await fetchJson(`https://api.themoviedb.org/3/${mediaType}/${mediaId}/videos?api_key=${apiKey}`);
    const trailer = data.results.find(video => video.type === 'Trailer' && video.site === 'YouTube');
    return trailer ? `https://www.youtube.com/embed/${trailer.key}` : null;
}

async function displaySelectedMedia(media, mediaType) {
    const $selectedMovie = $('#selectedMovie');
    const $mediaSection = $('#selectedMediaSection'); // The section to hide/show
    const apiKey = await getApiKey();

    // Check if the media is valid
    if (!media || !media.id) {
        // Hide the entire media section if no media is selected
        $mediaSection.addClass('hidden');
        return;
    } else {
        $mediaSection.removeClass('hidden');

        document.getElementById('selectedMediaSection').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    if (!apiKey) return console.error('API key is not available.');

    try {
        const [mediaData, castData] = await Promise.all([
            fetchMediaData(media.id, mediaType, apiKey),
            fetchCastData(media.id, mediaType, apiKey)
        ]);

        // Genres and common data
        const genres = mediaData.genres?.map(genre => genre.name).join(', ') || 'Unknown Genre';
        const language = mediaData.original_language?.toUpperCase() || 'Unknown';
        const releaseDate = media.release_date || media.first_air_date || 'Unknown Release Date';
        const productionCompanies = mediaData.production_companies?.map(company => company.name).join(', ') || 'Unknown Production Companies';
        const budget = mediaType === 'movie' ? (mediaData.budget ? `$${mediaData.budget.toLocaleString()}` : 'Unknown') : 'N/A';
        const revenue = mediaType === 'movie' ? (mediaData.revenue ? `$${mediaData.revenue.toLocaleString()}` : 'Unknown') : 'N/A';

        // Ratings and popularity
        const ratings = `
        <div class="flex items-center space-x-2">
            <i class="fas fa-star text-yellow-400"></i>
            <span class="text-lg font-semibold text-white">${(mediaData.vote_average || 0).toFixed(1)}</span>
            <span class="text-sm text-gray-400">/10</span>
        </div>`;
        const popularity = `
            <div class="flex items-center space-x-2">
                <i class="fas fa-fire text-orange-500"></i>
                <span class="text-lg font-semibold text-white">${(mediaData.popularity || 0).toFixed(1)}</span>
                <span class="text-sm text-gray-400">Popularity</span>
            </div>`;

        // Cast
        const castList = castData.cast.slice(0, 5).map(actor => `
            <div class="flex-shrink-0 w-28 mx-2 text-center">
                <div class="w-28 h-28 mx-auto mb-2 rounded-full overflow-hidden border-2 border-purple-500 shadow-lg">
                    <img src="https://image.tmdb.org/t/p/w500${actor.profile_path}" alt="${actor.name}" 
                         class="w-full h-full object-cover" onerror="this.src='path/to/placeholder-image.jpg';">
                </div>
                <p class="text-white font-semibold text-sm truncate">${actor.name}</p>
                <p class="text-gray-400 text-xs truncate">${actor.character}</p>
            </div>
        `).join('');

        // Runtime logic
        let runtime;
        let seasonSection = '';

        if (mediaType === 'movie') {
            // Movie-specific runtime
            runtime = `${mediaData.runtime || 'N/A'} min`;
        } else if (mediaType === 'tv') {
            // TV-specific logic: Display seasons and calculate episode runtime
            runtime = `${Math.round(mediaData.episode_run_time.reduce((a, b) => a + b, 0) / mediaData.episode_run_time.length)} min per episode`;

            seasonSection = `
    <div class="space-y-3">
        <div>
            <label for="seasonSelect" class="block text-sm font-medium text-gray-300 mb-1">
                <i class="fas fa-tv mr-2"></i>Select Season:
            </label>
            <select id="seasonSelect" class="custom-select w-full bg-gray-800 text-white rounded-lg border border-gray-600 p-2 focus:border-purple-400 focus:ring-purple-400 transition duration-200 ease-in-out">
                ${mediaData.seasons.filter(season => season.season_number !== 0).map(season =>
                `<option value="${season.season_number}">${season.name || `Season ${season.season_number}`}</option>`
            ).join('')}
            </select>
        </div>
        <div>
            <label for="episodeSelect" class="block text-sm font-medium text-gray-300 mb-1">
                <i class="fas fa-film mr-2"></i>Select Episode:
            </label>
            <select id="episodeSelect" class="custom-select w-full bg-gray-800 text-white rounded-lg border border-gray-600 p-2 focus:border-purple-400 focus:ring-purple-400 transition duration-200 ease-in-out">
            </select>
        </div>
                <div>
            <label for="episodeSearch" class="block text-sm font-medium text-gray-300 mb-1">
                <i class="fas fa-search mr-2"></i>Search Episode:
            </label>
            <input type="text" id="episodeSearch" class="custom-input w-full bg-gray-800 text-white rounded-lg border border-gray-600 p-2 focus:border-purple-400 focus:ring-purple-400 transition duration-200 ease-in-out" placeholder="Search for an episode...">
        </div>
    </div>
`;
        }

        // HTML template with updated data
        const template = await fetch('media/mediaTemplate.html').then(response => response.text());

        $selectedMovie.html(template
            .replace(/{{poster_path}}/g, `https://image.tmdb.org/t/p/w500${media.poster_path}`)
            .replace(/{{title_or_name}}/g, media.title || media.name)
            .replace(/{{season_section}}/g, seasonSection)
            .replace(/{{release_date_or_first_air_date}}/g, releaseDate)
            .replace(/{{overview}}/g, media.overview || 'No overview available.')
            .replace(/{{type}}/g, mediaType === 'movie' ? 'Movie' : 'TV Show')
            .replace(/{{language}}/g, `Language: ${language}`)
            .replace(/{{genres}}/g, `Genres: ${genres}`)
            .replace(/{{runtime}}/g, `Runtime: ${runtime}`)
            .replace(/{{budget}}/g, `Budget: ${budget}`)
            .replace(/{{revenue}}/g, `Revenue: ${revenue}`)
            .replace(/{{ratings}}/g, ratings)
            .replace(/{{popularity}}/g, popularity)
            .replace(/{{cast_list}}/g, castList)
            .replace(/{{production_companies}}/g, `Production Companies: ${productionCompanies}`)
        );

        const $videoPlayer = $('#videoPlayer');
        const $movieInfo = $('#movieInfo');
        const $playButton = $('#playButton');
        const $closePlayerButton = $('#closePlayerButton');
        const $languageSelect = $('#languageSelect');
        const $providerSelect = $('#providerSelect');
        const $seasonSelect = $('#seasonSelect');
        const $episodeSelect = $('#episodeSelect');

        let selectedProvider = 'vidsrc'; // Set default provider

        async function updateVideo() {
            try {
                const provider = $providerSelect.length ? $providerSelect.val() : selectedProvider;
                let endpoint;

                if (mediaType === 'tv') {
                    endpoint = await getTvEmbedUrl(media.id, $seasonSelect.val(), $episodeSelect.val(), provider, apiKey);
                } else {
                    endpoint = await getMovieEmbedUrl(media.id, provider, apiKey);
                }

                const sandboxAttribute = provider === 'vidlink' ? 'sandbox="allow-same-origin allow-scripts allow-forms"' : '';

                const iframeHtml = `
            <iframe 
                src="${endpoint}" 
                class="video-iframe" 
                allowfullscreen 
                ${sandboxAttribute}>
            </iframe>
        `;

                $videoPlayer.html(iframeHtml).removeClass('hidden');

                $movieInfo.children().not($videoPlayer).addClass('hidden');
                $closePlayerButton.removeClass('hidden');

                $('iframe').one('load', function () {
                    const iframeWindow = this.contentWindow;

                    if (iframeWindow) {
                        try {
                            iframeWindow.document.addEventListener('click', function (event) {
                                const target = event.target.tagName;
                                if (target === 'A' || target === 'BUTTON') {
                                    event.preventDefault();
                                }
                            });

                            ['beforeunload', 'unload', 'submit'].forEach(eventType => {
                                iframeWindow.document.addEventListener(eventType, event => event.preventDefault());
                            });
                        } catch (error) {
                            console.error('Error in iframe event handling:', error);
                        }
                    }
                });
            } catch (error) {
                console.error('Error updating video:', error);
            }
        }



        async function closeVideoPlayer() {
            // Reset the video player content and hide it
            $videoPlayer.html('').addClass('hidden');

            $movieInfo.children().removeClass('hidden');

            $closePlayerButton.addClass('hidden');
        }

        function adjustIframeSize() {
            const $iframe = $('#dynamicIframe');

            // Get the current viewport width and height
            const viewportWidth = $(window).width();
            const viewportHeight = $(window).height();

            // Adjust iframe size based on the viewport size
            $iframe.css({
                width: `${viewportWidth}px`,
                height: `${viewportHeight}px`
            });
        }

        // Attach event listener to resize iframe on window resize
        $(window).on('resize', adjustIframeSize);
        adjustIframeSize();

        async function updateEpisodes() {
            const seasonNumber = $seasonSelect.val();
            if (!seasonNumber) return;

            try {
                const season = await fetchJson(`https://api.themoviedb.org/3/tv/${media.id}/season/${seasonNumber}?api_key=${apiKey}`);

                const episodeRuntime = season.episodes.reduce((total, episode) => total + (episode.runtime || 0), 0) / season.episodes.length || 0;

                $('#runtime').html(`Runtime: ${Math.round(episodeRuntime)} min per episode`);

                const currentDate = new Date();

                // Store original episode data for searching
                const episodes = season.episodes.map(episode => ({
                    number: episode.episode_number,
                    name: episode.name || 'Untitled',
                    airDate: new Date(episode.air_date),
                    stillPath: episode.still_path,
                    isAired: new Date(episode.air_date) <= currentDate
                }));

                // Utility function to escape HTML special characters
                function escapeHtml(str) {
                    return str.replace(/[&<>"'()]/g, function (match) {
                        const escape = {
                            '&': '&amp;',
                            '<': '&lt;',
                            '>': '&gt;',
                            '"': '&quot;',
                            "'": '&#39;',
                            '(': '&#40;',
                            ')': '&#41;'
                        };
                        return escape[match];
                    });
                }

                // Function to render episodes in the dropdown
                function renderEpisodes(filteredEpisodes) {
                    $episodeSelect.html(filteredEpisodes.map(episode => `
                <option value="${episode.number}" 
                        data-image="https://image.tmdb.org/t/p/w500${episode.stillPath}" 
                        ${!episode.isAired ? 'disabled style="color: grey;"' : ''}>
                    Episode ${episode.number}: ${escapeHtml(episode.name)} ${!episode.isAired ? '(Not aired yet)' : ''}
                </option>
            `).join('')).trigger('change');
                }

                // Render all episodes initially
                renderEpisodes(episodes);

                // Add search functionality
                $('#episodeSearch').on('input', function () {
                    const searchTerm = $(this).val().toLowerCase();

                    // Search for episodes by name or number
                    const filteredEpisodes = episodes.filter(episode =>
                        episode.name.toLowerCase().includes(searchTerm) ||
                        episode.number.toString().includes(searchTerm)
                    );

                    // Render the filtered episodes
                    renderEpisodes(filteredEpisodes);
                });

            } catch (error) {
                console.error('Failed to fetch season details:', error);
                $episodeSelect.html('<option>Failed to load episodes</option>');
            }
        }


        if (mediaType === 'tv') {
            await updateEpisodes();
        }

        // Ensure the player updates on all interactions
        $playButton.on('click', updateVideo);
        $closePlayerButton.on('click', closeVideoPlayer);
        $languageSelect.on('change', function() {
            $providerSelect.toggleClass('hidden', $languageSelect.val() === 'fr');
            updateVideo();
        });
        $providerSelect.on('change', function() {
            selectedProvider = $(this).val();
            updateVideo();
        });
        $seasonSelect.on('change', async function() {
            await updateEpisodes();
            updateVideo();
        });
        $episodeSelect.on('change', updateVideo);

    } catch (error) {
        console.error('Failed to display selected media:', error);
    }
}
