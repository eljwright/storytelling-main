var config = {
    style: 'mapbox://styles/eljwright/cm917hn4x007901sd5zhb8hbk',
    accessToken: 'pk.eyJ1IjoiZWxqd3JpZ2h0IiwiYSI6ImNtNDduZnlweTA3dm4ybXNjY3R5anAyOGsifQ.gS6yn_JP5mcEIyF9wbgspw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,


    title: 'Redlining Reimagined',
    subtitle: 'An interactive exploration of redlining discriminatory housing practices in Seattle, Washington and their devastating modern legacies',
    byline: 'By: Elijah Wright',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',

    chapters: [
        {
            id: 'chapter-one',
            alignment: 'left',
            hidden: false,
            title: 'Introduction',
            image: '',
            description: 'The history of segregation in American cities is one with deep roots and multiple different stories. This interactive mapping website will evaluate the way one specific practice known as redlining significantly contributed to socio-spatial inequality within Seattle, Washington. We will also consider the ways in which it still impacts communities to this day.',
            location: {
                center: [-122.341919, 47.598645],
                zoom: 10,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'Redlining-D-grade',
                    opacity: 1,
                },
                {
                    layer: 'Redlining-C-grade',
                    opacity: 1,
                },
                {
                    layer: 'Redlining-B-grade',
                    opacity: 1,
                },
                {
                    layer: 'Redlining-A-grade',
                    opacity: 1,
                },
                {
                    layer: 'RSE-lowest',
                    opacity: 0,
                },
                {
                    layer: 'RSE-second-lowest',
                    opacity: 0,
                },
                {
                    layer: 'RSE-middle',
                    opacity: 0,
                },
                {
                    layer: 'RSE-second-highest',
                    opacity: 0,
                },
                {
                    layer: 'RSE-highest',
                    opacity: 0,
                },
            ],        
            onChapterExit: [
                {
                    layer: 'Redlining-A-grade,
                },
         ], 
        },
        {
            id: 'chapter-two',
            alignment: 'full',
            hidden: false,
            title: 'Federal Context',
            image: '',
            description: 'To understand the practice of and impacts of redlining, we must first understand the historical context. In the aftermath of the Great Depression, president Franklin Delano Roosevelt (FDR) started implementing what he called New Deal programs. These programs aimed to create social safety nets and promote economic recovery after the depression. As part of the New Deal, FDR established the Homeowners Loan Corporation (HOLC) and the Federal Housing Administration (FHA) to try and make homeownership more accessible for Americans. Once created the FHA helped standardize the 30 year mortgage and cemented homeownership as a central part of the “American Dream”.',
            location: {
                center: [-122.341919, 47.598645],
                zoom: 10,
                pitch: 60,
                bearing: 0
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-three',
            alignment: 'left',
            hidden: false,
            title: 'Geneva',
            image: './assets/geneva.jpg',
            description: 'Geneva, Switzerland, is a picturesque city nestled along the shores of Lake Geneva, surrounded by the Alps and Jura mountains. Known as a global hub for diplomacy and finance, it is home to numerous international organizations, including the United Nations and the Red Cross.',
            location: {
                center: [-122.341919, 47.598645],
                zoom: 10,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-four',
            alignment: 'center',
            hidden: false,
            title: 'Racial component of HOLC grades',
            image: './images/Seattle_HOLC_Racial_Map.jpg',
            description: 'Buenos Aires, the capital of Argentina, is a dynamic city known for its European-inspired architecture, vibrant tango culture, and rich culinary scene. Often called the "Paris of South America," it blends historic charm with modern energy.  You can add as many chapters as you need, just copy the JSON data and make changes.',
            location: {
                center: [-122.341919, 47.598645],
                zoom: 10,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
