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
                center: [-122.41998, 47.59141],
                zoom: 10.45,
                pitch: 15,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'Redlining_Georef',
                    opacity: 0,
                },
                {
                    layer: 'Racial_Georef',
                    opacity: 0,
                },
                {
                    layer: 'Redlining-D-grade',
                    opacity: 0,
                },
                {
                    layer: 'Redlining-C-grade',
                    opacity: 0,
                },
                {
                    layer: 'Redlining-B-grade',
                    opacity: 0,
                },
                {
                    layer: 'Redlining-A-grade',
                    opacity: 0,
                },
                {
                    layer: 'Redlining-Indus',
                    opacity: 0,
                },
                {
                    layer: 'Redlining-Busi',
                    opacity: 0,
                },
                {
                    layer: 'RSE-lowest',
                    opacity: 1,
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
            onChapterExit: [], 
        },
        {
            id: 'chapter-two',
            alignment: 'full',
            hidden: false,
            title: 'Federal Context',
            image: '',
            description: 'To understand the practice of and impacts of redlining, we must first understand the historical context. In the aftermath of the Great Depression, president Franklin Delano Roosevelt (FDR) started implementing what he called New Deal programs. These programs aimed to create social safety nets and promote economic recovery after the depression. As part of the New Deal, FDR established the Homeowners Loan Corporation (HOLC) and the Federal Housing Administration (FHA) to try and make homeownership more accessible for Americans. Once created the FHA helped standardize the 30 year mortgage and cemented homeownership as a central part of the “American Dream”.',
            location: {
                center: [-122.41998, 47.59141],
                zoom: 10.45,
                pitch: 15,
                bearing: 0
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-three',
            alignment: 'left',
            hidden: false,
            title: 'Redlining Map Overview',
            image: '',
            description:'Meanwhile the HOLC, worried about taking on risky loans, made color-coded maps to assess the riskiness of granting home loans in different neighborhoods. They created four different categories that they would rank neighborhoods into.',
            location: {
                center: [-122.41998, 47.59141],
                zoom: 10.45,
                pitch: 15,
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
            alignment: 'left',
            hidden: false,
            title: 'Racial component of HOLC grades',
            image: '',
            description: 'Although the HOLC maps were supposed to be about economic stability and who would be able to pay off their loans in the future, racial demographics were undeniably a major factor in what grade a neighborhood would receive. White neighborhoods were typically classified as “Best”, but if even one Black family lived there, the neighborhood would be determined to be “Definitely Declining” or “Hazardous”. This is especially noticeable when you review the area descriptions that were written to inform the grades. The following Seattle area descriptions will also show the significant difference in the factors used to categorize neighborhoods based on race.',
            location: {
                center: [-122.41998, 47.59141],
                zoom: 10.45,
                pitch: 15,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-four-a',
            alignment: 'right',
            hidden: false,
            title: 'Area Description Example: Zone A3',
            image: '',
            description: 'Non-white neighborhoods, such as this one in modern-day Laurelhurst, often had long and detailed descriptions of the quality of the houses and other factors affecting the neighborhood. A3 area description: “This area is one of the most popular residential districts in Seattle. The residents are of the professional class, having an annual income of $4000 to $10,000 per year. There is very choice view property in this area. The homes, generally, are less than to years old-- in the $6500 to $15,000 price class; and well maintained. During 1935 there were some new residential structures placed under construction in this area. The property is protected by building and racial restrictions.”',
            location: {
                center: [-122.27079, 47.65791],
                zoom: 13.5,
                pitch: 15,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-four-b',
            alignment: 'right',
            hidden: false,
            title: 'Area Description Example: Zone D4',
            image: '',
            description: 'Neighborhoods with non-white residents, such as the Central District which was majority Black, often had area descriptions that only described the race of the residents and nothing else. D4 area description: “This is a negro area of Seattle”. This area description is notably much shorter than those in white neighborhoods (such as A3). They didn’t describe the quality of the houses at all and decided that because it was a Black neighborhood, that was a good enough reason to grade it as “hazardous”. This demonstrates the significant disparity between how redlining grades were determined between white and non-white neighborhoods and how heavily racialized they were.',
            location: {
                center: [-122.29692, 47.61785],
                zoom: 13.25,
                pitch: 15,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-four-c',
            alignment: 'left',
            hidden: false,
            title: 'HOLC Racial Map',
            description: 'Another example that showcases the clear racist nature of the redlining map was that in addition to the loan security map, the HOLC also created a racial map that showed the areas certain ethnicities were the most present in. In addition to showing where certain racial groups lived, the HOLC racial map also included arrows that showed the “direction of infiltration” of those groups. This is likely a direct reference to the FHA’s Underwriting Manual which warned housing developers, without sufficient evidence, that property values would be threatened by the “infiltration of inharmonious racial groups”. This map was submitted on the same day and by the same HOLC field agent as the mortgage security redlining map, and is a clear demonstration that the HOLC was always considering racial factors in their maps.',
            image: '/images/Seattle_HOLC_Racial_Map.jpg',
            location: {
                center: [-122.41998, 47.59141],
                zoom: 10.45,
                pitch: 15,
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
