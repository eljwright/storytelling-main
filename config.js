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
            description: 'The history of segregation in Seattle, Washington is one with deep roots and multiple different stories. The city was founded on exclusionary bases, with legislation that expelled the native Duwamish people from residing within city limits. These segregationist roots persisted throughout the decades, with many explicit anti-Asian and anti-Black policies being enacted in the 19th and 20th centuries. This interactive mapping website will evaluate the way one specific practice known as redlining significantly contributed to socio-spatial inequality within Seattle, Washington. We will also consider the ways in which it still impacts communities to this day.',
            location: {
                center: [-122.37414, 47.61064],
                zoom: 11.06,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'Redlining_Line',
                    opacity: 0,
                },
                {
                    layer: 'Socioecon-highest',
                    opacity: 0,
                },
                {
                    layer: 'Socioecon-second-highest',
                    opacity: 0,
                },
                {
                    layer: 'Socioecon-middle',
                    opacity: 0,
                },
                {
                    layer: 'Socioecon-second-lowest',
                    opacity: 0,
                },
                {
                    layer: 'Socioecon-lowest',
                    opacity: 0
                },
                {
                    layer: 'Racial_georef',
                    opacity: 0,
                },
                {
                    layer: 'RSE-highest',
                    opacity: 0,
                },
                {
                    layer: 'RSE-second-highest',
                    opacity: 0,
                },
                {
                    layer: 'RSE-middle',
                    opacity: 0,
                },
                {
                    layer: 'RSE-second-lowest',
                    opacity: 0,
                },
                {
                    layer: 'RSE-lowest',
                    opacity: 0,
                },
                {
                    layer: 'Redlining_Georef',
                    opacity: 1,
                },
                {
                    layer: 'Racial_Georef',
                    opacity: 0,
                },
                {
                    layer: 'Redlining-Busi',
                    opacity: 0,
                },
                {
                    layer: 'Redlining-Indus',
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
            ],        
            onChapterExit:[], 
        },
        {
            id: 'chapter-two',
            alignment: 'center',
            hidden: false,
            title: 'Federal Context',
            image: '',
            description: 'To understand the practice of and impacts of redlining, we must first understand the historical context. In the aftermath of the Great Depression, president Franklin Delano Roosevelt (FDR) started implementing what he called New Deal programs. These programs aimed to create social safety nets and promote economic recovery after the depression. As part of the New Deal, FDR established the Homeowners Loan Corporation (HOLC) and the Federal Housing Administration (FHA) to try and make homeownership more accessible for Americans. Once created the FHA helped standardize the 30 year mortgage and cemented homeownership as a central part of the “American Dream”.',
            location: {
                center: [-122.37414, 47.61064],
                zoom: 11.06,
                pitch: 0,
                bearing: 0
            },
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                // speed: 2, // make the flying slow
                // curve: 1, // change the speed at which it zooms out
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [                
            {
                layer: 'Socioecon-highest',
                opacity: 0,
            },
            {
                layer: 'Socioecon-second-highest',
                opacity: 0,
            },
            {
                layer: 'Socioecon-middle',
                opacity: 0,
            },
            {
                layer: 'Socioecon-second-lowest',
                opacity: 0,
            },
            {
                layer: 'Socioecon-lowest',
                opacity: 0
            },
            {
                layer: 'Racial_georef',
                opacity: 0,
            },
            {
                layer: 'RSE-highest',
                opacity: 0,
            },
            {
                layer: 'RSE-second-highest',
                opacity: 0,
            },
            {
                layer: 'RSE-middle',
                opacity: 0,
            },
            {
                layer: 'RSE-second-lowest',
                opacity: 0,
            },
            {
                layer: 'RSE-lowest',
                opacity: 0,
            },
            {
                layer: 'Redlining_Georef',
                opacity: 1,
            },
            {
                layer: 'Racial_Georef',
                opacity: 0,
            }],
            onChapterExit: [],
        },
        {
            id: 'chapter-three',
            alignment: 'left',
            hidden: false,
            title: 'Redlining Map Overview',
            image: '',
            description:'Meanwhile the HOLC, worried about taking on risky loans, made color-coded maps to assess the riskiness of granting home loans in different neighborhoods. They created four different categories that they would rank neighborhoods into. <br><br> These grades were: <br> <p style="color:green;">A: Best - Green</p> <p style="color:blue;">B: Still Desirable - Blue</p> <p style="color:yellow;">C: Definitely Declining - Yellow</p> <p style="color:red;">D: Hazardous - Red</p><br>After these maps were created, they were adopted by the FHA as well as private banks to inform their decisions on who to lend to. This meant that families and individuals in the Red and Yellow graded neighborhoods would be systematically denied home loans.',
            location: {
                center: [-122.37414, 47.61064],
                zoom: 11.06,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [                {
                layer: 'Socioecon-highest',
                opacity: 0,
            },
            {
                layer: 'Socioecon-second-highest',
                opacity: 0,
            },
            {
                layer: 'Socioecon-middle',
                opacity: 0,
            },
            {
                layer: 'Socioecon-second-lowest',
                opacity: 0,
            },
            {
                layer: 'Socioecon-lowest',
                opacity: 0
            },
            {
                layer: 'Racial_georef',
                opacity: 0,
            },
            {
                layer: 'RSE-highest',
                opacity: 0,
            },
            {
                layer: 'RSE-second-highest',
                opacity: 0,
            },
            {
                layer: 'RSE-middle',
                opacity: 0,
            },
            {
                layer: 'RSE-second-lowest',
                opacity: 0,
            },
            {
                layer: 'RSE-lowest',
                opacity: 0,
            },
            {
                layer: 'Redlining_Georef',
                opacity: 1,
            },
            {
                layer: 'Racial_Georef',
                opacity: 0,
            }],
            onChapterExit: [],
        },
        {
            id: 'chapter-four',
            alignment: 'left',
            hidden: false,
            title: 'Racial component of HOLC grades',
            image: '',
            description: 'Although the HOLC maps were supposed to be about economic stability and who would be able to pay off their loans in the future, racial demographics were undeniably a major factor in what grade a neighborhood would receive. White neighborhoods were typically classified as “Best”, but if even one Black family lived there, the neighborhood would be determined to be “Definitely Declining” or “Hazardous”. This is especially noticeable when you review the area descriptions that were written to inform the grades. The following Seattle area descriptions will also show the significant difference in the factors used to categorize neighborhoods based on race.',
            location: {
                center: [-122.37414, 47.61064],
                zoom: 11.06,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [                {
                layer: 'Socioecon-highest',
                opacity: 0,
            },
            {
                layer: 'Socioecon-second-highest',
                opacity: 0,
            },
            {
                layer: 'Socioecon-middle',
                opacity: 0,
            },
            {
                layer: 'Socioecon-second-lowest',
                opacity: 0,
            },
            {
                layer: 'Socioecon-lowest',
                opacity: 0
            },
            {
                layer: 'Racial_georef',
                opacity: 0,
            },
            {
                layer: 'RSE-highest',
                opacity: 0,
            },
            {
                layer: 'RSE-second-highest',
                opacity: 0,
            },
            {
                layer: 'RSE-middle',
                opacity: 0,
            },
            {
                layer: 'RSE-second-lowest',
                opacity: 0,
            },
            {
                layer: 'RSE-lowest',
                opacity: 0,
            },
            {
                layer: 'Redlining_Georef',
                opacity: 1,
            },
            {
                layer: 'Racial_Georef',
                opacity: 0,
            }],
            onChapterExit: [],
        },
        {
            id: 'chapter-four-a',
            alignment: 'right',
            hidden: false,
            title: 'Area Description Example: Zone A3',
            image: '',
            description: 'Non-white neighborhoods, such as this one in modern-day Laurelhurst, often had long and detailed descriptions of the quality of the houses and other factors affecting the neighborhood. <br> <br> <b>A3 area description:</b> “This area is one of the most popular residential districts in Seattle. The residents are of the professional class, having an annual income of $4000 to $10,000 per year. There is very choice view property in this area. The homes, generally, are less than to years old-- in the $6500 to $15,000 price class; and well maintained. During 1935 there were some new residential structures placed under construction in this area. The property is protected by building and racial restrictions.”',
            location: {
                center: [-122.27079, 47.65791],
                zoom: 13.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [                {
                layer: 'Socioecon-highest',
                opacity: 0,
            },
            {
                layer: 'Socioecon-second-highest',
                opacity: 0,
            },
            {
                layer: 'Socioecon-middle',
                opacity: 0,
            },
            {
                layer: 'Socioecon-second-lowest',
                opacity: 0,
            },
            {
                layer: 'Socioecon-lowest',
                opacity: 0
            },
            {
                layer: 'Racial_georef',
                opacity: 0,
            },
            {
                layer: 'RSE-highest',
                opacity: 0,
            },
            {
                layer: 'RSE-second-highest',
                opacity: 0,
            },
            {
                layer: 'RSE-middle',
                opacity: 0,
            },
            {
                layer: 'RSE-second-lowest',
                opacity: 0,
            },
            {
                layer: 'RSE-lowest',
                opacity: 0,
            },
            {
                layer: 'Redlining_Georef',
                opacity: 1,
            },
            {
                layer: 'Racial_Georef',
                opacity: 0,
            }],
            onChapterExit: [],
        },
        {
            id: 'chapter-four-b',
            alignment: 'right',
            hidden: false,
            title: 'Area Description Example: Zone D4',
            image: '',
            description: 'Neighborhoods with non-white residents, such as the Central District which was majority Black, often had area descriptions that only described the race of the residents and nothing else. <br><br> <b>D4 area description:</b> “This is a negro area of Seattle”. <br><br>This area description is notably much shorter than those in white neighborhoods (such as A3). They didn’t describe the quality of the houses at all and decided that because it was a Black neighborhood, that was a good enough reason to grade it as “hazardous”. This demonstrates the significant disparity between how redlining grades were determined between white and non-white neighborhoods and how heavily racialized they were.',
            location: {
                center: [-122.29692, 47.61785],
                zoom: 13.25,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [                {
                layer: 'Socioecon-highest',
                opacity: 0,
            },
            {
                layer: 'Socioecon-second-highest',
                opacity: 0,
            },
            {
                layer: 'Socioecon-middle',
                opacity: 0,
            },
            {
                layer: 'Socioecon-second-lowest',
                opacity: 0,
            },
            {
                layer: 'Socioecon-lowest',
                opacity: 0
            },
            {
                layer: 'Racial_georef',
                opacity: 0,
            },
            {
                layer: 'RSE-highest',
                opacity: 0,
            },
            {
                layer: 'RSE-second-highest',
                opacity: 0,
            },
            {
                layer: 'RSE-middle',
                opacity: 0,
            },
            {
                layer: 'RSE-second-lowest',
                opacity: 0,
            },
            {
                layer: 'RSE-lowest',
                opacity: 0,
            },
            {
                layer: 'Redlining_Georef',
                opacity: 1,
            },
            {
                layer: 'Racial_Georef',
                opacity: 0,
            }],
            onChapterExit: [],
        },
        {
            id: 'chapter-four-c',
            alignment: 'right',
            hidden: false,
            title: 'HOLC Racial Map',
            description: 'Another example that showcases the clear racist nature of the redlining map was that in addition to the loan security map, the HOLC also created a racial map that showed the areas certain ethnicities were the most present in. In addition to showing where certain racial groups lived, the HOLC racial map also included arrows that showed the “direction of infiltration” of those groups. This is likely a direct reference to the FHA’s Underwriting Manual which warned housing developers, without sufficient evidence, that property values would be threatened by the “infiltration of inharmonious racial groups”. This map was submitted on the same day and by the same HOLC field agent as the mortgage security redlining map, and is a clear demonstration that the HOLC was always considering racial factors in their maps.<br><br><img class="small_image" src="/images/Racial_Map_Legend.jpg" alt="legend of the HOLC racial map of Seattle">',
            image: '',
            location: {
                center: [-122.30995, 47.61614],
                zoom: 12,
                pitch: 0,
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
                    opacity: 1,
                }
            ],
            onChapterExit: [
                {
                    layer: 'Racial_Georef',
                    opacity: 0,
                }
            ],
        },
        {
            id: 'chapter-five',
            alignment: 'left',
            hidden: false,
            title: 'Impact of Redlining',
            description: 'As previously mentioned, redlining severely impacted the individuals and families who were in the C and D graded areas. These categories meant that people in those areas deemed as “definitely declining” or “hazardous” could not get mortgage loans or if they did manage to secure a loan, got highly unfavorable conditions. This prevented them from building generational wealth in the form of home equity, which has had major impacts that are still impacting these communities today.',
            image: '',
            location: {
                center: [-122.37414, 47.61064],
                zoom: 11.06,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'Redlining_Georef',
                    opacity: 1
                },
                {
                    layer: 'Racial_Georef',
                    opacity: 0,
                }
            ],
            onChapterExit: [],
        },
        {
            id: 'chapter-six',
            alignment: 'full',
            hidden: false,
            title: 'Community Resistance',
            description: 'Before going into detail on the enduring legacy of redlining within Seattle, we will look at the history of legislation and community resistance to redlining <br> Summer of 1963!! (locally and nationally)<br><img src="images/Sit-in_1.jpg" alt="July 1 1963 sit-in" width="50" height="200">',
            image: '/images/Sit-in_1.jpg',
            location: {
                center: [-122.41998, 47.59141],
                zoom: 10.45,
                pitch: 15,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [                {
                layer: 'Socioecon-highest',
                opacity: 0,
            },
            {
                layer: 'Socioecon-second-highest',
                opacity: 0,
            },
            {
                layer: 'Socioecon-middle',
                opacity: 0,
            },
            {
                layer: 'Socioecon-second-lowest',
                opacity: 0,
            },
            {
                layer: 'Socioecon-lowest',
                opacity: 0
            },
            {
                layer: 'Racial_georef',
                opacity: 0,
            },
            {
                layer: 'RSE-highest',
                opacity: 0,
            },
            {
                layer: 'RSE-second-highest',
                opacity: 0,
            },
            {
                layer: 'RSE-middle',
                opacity: 0,
            },
            {
                layer: 'RSE-second-lowest',
                opacity: 0,
            },
            {
                layer: 'RSE-lowest',
                opacity: 0,
            },
            {
                layer: 'Redlining_Georef',
                opacity: 1,
            },
            {
                layer: 'Racial_Georef',
                opacity: 0,
            }],
            onChapterExit: [],
        },
        {
            id: 'chapter-seven',
            alignment: 'full',
            hidden: false,
            title: 'Legislation and Modern Impacts',
            description: 'Although redlining was finally outlawed at the federal level and local levels in 1968 with the Fair Housing Act and Fair Housing Ordinance (Ordinance 96619) respectively, elements of the practice persisted for several years. In 1975 the Central Seattle Community Council Federation published a report titled Redlining and Disinvestment in Central Seattle that outlined how even after this legislation, residents of the Central District, a redlined zone, still faced major barriers to receiving home loans. After this report was published, several local government initiatives were undertaken as an attempt to reverse the effects of redlining, these include Seattle’s Reinvestment Task Force (established 1975) and the Lenders Review Board (est 1976). <br>Despite efforts from the city government, redlining still has a mjaor impact on Seattle today. Its legacy can be seen across many areas of inequality, including income, health, education and employment, among many others. In the following sections, we’ll look more closely at how these impacts show up in different parts of the city.<br><br><img class="small_image" src="/images/Lenders_Review_Board.jpg" alt="ad promoting the lenders review board">',
            image: '',
            location: {
                center: [-122.41998, 47.59141],
                zoom: 10.45,
                pitch: 15,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [                {
                layer: 'Socioecon-highest',
                opacity: 0,
            },
            {
                layer: 'Socioecon-second-highest',
                opacity: 0,
            },
            {
                layer: 'Socioecon-middle',
                opacity: 0,
            },
            {
                layer: 'Socioecon-second-lowest',
                opacity: 0,
            },
            {
                layer: 'Socioecon-lowest',
                opacity: 0
            },
            {
                layer: 'Racial_georef',
                opacity: 0,
            },
            {
                layer: 'RSE-highest',
                opacity: 0,
            },
            {
                layer: 'RSE-second-highest',
                opacity: 0,
            },
            {
                layer: 'RSE-middle',
                opacity: 0,
            },
            {
                layer: 'RSE-second-lowest',
                opacity: 0,
            },
            {
                layer: 'RSE-lowest',
                opacity: 0,
            },
            {
                layer: 'Redlining-Busi',
                opacity: 0,
            },
            {
                layer: 'Redlining-Indus',
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
                layer: 'Redlining_Georef',
                opacity: 1,
            },
            {
                layer: 'Racial_Georef',
                opacity: 0,
            }],
            onChapterExit: [],
        },
        {
            id: 'chapter-eight',
            alignment: 'left',
            hidden: false,
            title: 'Modern Wealth Inequality',
            description: 'One of the most prominent effects of redlining is that it prevented people in redlined neighborhoods from being able to own homes and build generational wealth. This led to enormous wealth gaps that still persist today between those who lived in C and D graded neighborhoods and those who lived in A and B graded neighborhoods. A recent study by ECONorthwest found that without racially discriminatory housing practices (including redlining but also practices such as racial housing covenants and private discrimination) King County’s BIPOC households would hold between $12 and $34 billion in additional wealth today. Additionally they found that each individual Black household in King County would hold between $105,000 to $306,000 in additional wealth today if it weren’t for this racial discrimination in housing.  <br><br> These wealth disparities impact more than just finances, they also have a significant influence on things such as access to education or healthcare.',
            image: '',
            location: {
                center: [-122.45885, 47.59481], 
                zoom: 10.7,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [                
            {
                    layer: 'Redlining_Georef',
                    opacity: 1,
            },
            {
                layer: 'Redlining_Line',
                opacity: 0,
            },
            {
                layer: 'Socioecon-highest',
                opacity: 0,
            },
            {
                layer: 'Socioecon-second-highest',
                opacity: 0,
            },
            {
                layer: 'Socioecon-middle',
                opacity: 0,
            },
            {
                layer: 'Socioecon-second-lowest',
                opacity: 0,
            },
            {
                layer: 'Socioecon-lowest',
                opacity: 0
            },
            {
                layer: 'Racial_georef',
                opacity: 0,
            },
            {
                layer: 'RSE-highest',
                opacity: 0,
            },
            {
                layer: 'RSE-second-highest',
                opacity: 0,
            },
            {
                layer: 'RSE-middle',
                opacity: 0,
            },
            {
                layer: 'RSE-second-lowest',
                opacity: 0,
            },
            {
                layer: 'RSE-lowest',
                opacity: 0,
            },
            {
                layer: 'Redlining-Busi',
                opacity: 0,
            },
            {
                layer: 'Redlining-Indus',
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
                layer: 'Racial_Georef',
                opacity: 0,
            }],
            onChapterExit: [
                {
                    layer: 'Socioecon-highest',
                    opacity: 0.9,
                },
                {
                    layer: 'Socioecon-second-highest',
                    opacity: 0.9,
                },
                {
                    layer: 'Socioecon-middle',
                    opacity: 0.9,
                },
                {
                    layer: 'Socioecon-second-lowest',
                    opacity: 0.9,
                },
                {
                    layer: 'Socioecon-lowest',
                    opacity: 0.9,
                },
                {
                    layer: 'Redlining_Georef',
                    opacity: 0,
                },
                {
                    layer: 'Racial_Georef',
                    opacity: 0,
                }
            ],
        },
        {
            id: 'chapter-eight-a',
            alignment: 'right',
            hidden: false,
            title: 'RSE Socioeconomic Map',
            description: 'To better understand how redlining continues to shape Seattle today, we will now look at the Racial and Social Equity (RSE) Index, specifically focusing on the socioeconomic subindex. This map was created by the Seattle city government in 2017 to evaluate which areas of the city need to be prioritized for them to successfully fulfil their equitable development goals. The map shows the census tracts that the city deemed to be the most economically disadvantaged, classifications determined by a combination of income and educational attainment data. <br><br> <b>Map Legend: </b><br>Red: Highest Equity Priority/ Most Disadvantaged<br>Yellow: Second Highest Equity Priority<br>Purple: Middle<br>Blue: Second Lowest Equity Priority<br>Green: Lowest Equity Priority',
            image: '',
            location: {
                center: [-122.27824, 47.61162], 
                zoom: 10.4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            // On ch enter have RSE socioeconomic map appear
            onChapterEnter: [
                {
                    layer: 'Redlining_Line',
                    opacity: 0,
                },
                {
                    layer: 'Redlining-Busi',
                    opacity: 0,
                },
                {
                    layer: 'Redlining-Indus',
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
                    layer: 'Redlining_Georef',
                    opacity: 0,
                },
                {
                    layer: 'Racial_Georef',
                    opacity: 0,
                },
                {
                    layer: 'Socioecon-highest',
                    opacity: 0.9,
                },
                {
                    layer: 'Socioecon-second-highest',
                    opacity: 0.9,
                },
                {
                    layer: 'Socioecon-middle',
                    opacity: 0.9,
                },
                {
                    layer: 'Socioecon-second-lowest',
                    opacity: 0.9,
                },
                {
                    layer: 'Socioecon-lowest',
                    opacity: 0.9,
                },
                {
                    layer: 'RSE-highest',
                    opacity: 0,
                },
                {
                    layer: 'RSE-second-highest',
                    opacity: 0,
                },
                {
                    layer: 'RSE-middle',
                    opacity: 0,
                },
                {
                    layer: 'RSE-second-lowest',
                    opacity: 0,
                },
                {
                    layer: 'RSE-lowest',
                    opacity: 0,
                },
            ],
            onChapterExit: [],
        },
        {
            id: 'chapter-eight-b',
            alignment: 'right',
            hidden: false,
            title: 'RSE Socioeconomic Map: Highest Equity Priority Areas',
            description: 'We will now exclusively focus on the areas the city has identified as the most socioeconomically disadvantaged, the areas labeled as “highest equity priority”. These are the parts of Seattle where income and education disparities are most severe.',
            image: '',
            location: {
                center: [-122.27490, 47.59700], 
                zoom: 10.7,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            // Have RSE Socioecon layers (except most disadvantaged) leave. Have layer at full opacity
            onChapterEnter: [
                {
                    layer: 'Redlining_Georef',
                    opacity: 0,
                },
                {
                    layer: 'Redlining_Line',
                    opacity: 0,
                },
                {
                    layer: 'Socioecon-highest',
                    opacity: 1,
                },
                {
                    layer: 'Socioecon-second-highest',
                    opacity: 0,
                },
                {
                    layer: 'Socioecon-middle',
                    opacity: 0,
                },
                {
                    layer: 'Socioecon-second-lowest',
                    opacity: 0,
                },
                {
                    layer: 'Socioecon-lowest',
                    opacity: 0
                },
            ],
            onChapterExit: [],
        },
        {
            id: 'chapter-eight-c',
            alignment: 'right',
            hidden: false,
            title: 'Socioeconomic Inequality & Redlining',
            description: 'Here we begin to compare the distribution of modern socioeconomic inequality with the 1936 redlining map so we can explore how closely modern inequalities follow historic redlining boundaries.<br><br>As this map shows, nearly all of the “highest equity priority” areas are concentrated in the southern part of the city, with the main exception being the area around the University of Washington. ',
            image: '',
            location: {
                center: [-122.27490, 47.59700], 
                zoom: 10.7,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            // Bring back redlining layer
            onChapterEnter: [
                {
                    layer: 'Redlining_Georef',
                    opacity: 1,
                },
                {
                    layer: 'Redlining_Line',
                    opacity: 1,
                },
                {
                    layer: 'Socioecon-highest',
                    opacity: 1,
                },
                {
                    layer: 'Socioecon-second-highest',
                    opacity: 0,
                },
                {
                    layer: 'Socioecon-middle',
                    opacity: 0,
                },
                {
                    layer: 'Socioecon-second-lowest',
                    opacity: 0,
                },
                {
                    layer: 'Socioecon-lowest',
                    opacity: 0
                },
            ],
            onChapterExit: [],
        },
        {
            id: 'chapter-eight-d',
            alignment: 'right',
            hidden: false,
            title: 'Socioeconomic Inequality & Redlining',
            description: 'Now, with the RSE layer transparent, we can see that today’s most socioeconomically disadvantaged neighborhoods were almost all graded as “definitely declining” or “hazardous” on the 1936 HOLC redlining map. This includes parts of the Central District (D5), Rainier Valley (C13 & C14), and Delridge (D8 & C15). The correlation is no coincidence. Families in redlined areas were systematically denied the opportunity to build and pass down wealth through homeownership, a key factor in long term economic opportunity.<br><br>We’ll now move on to exploring other factors, namely disinvestment and gentrification, that have also continued to reinforce the inequalities of redlining.',
            image: '',
            location: {
                center: [-122.27490, 47.59700], 
                zoom: 10.7,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            // Lower opacity of RSE layer
            onChapterEnter: [
                {
                    layer: 'Redlining_Georef',
                    opacity: 1,
                },
                {
                    layer: 'Redlining_Line',
                    opacity: 1,
                },
                {
                    layer: 'Socioecon-highest',
                    opacity: 0.65,
                },
                {
                    layer: 'Socioecon-second-highest',
                    opacity: 0,
                },
                {
                    layer: 'Socioecon-middle',
                    opacity: 0,
                },
                {
                    layer: 'Socioecon-second-lowest',
                    opacity: 0,
                },
                {
                    layer: 'Socioecon-lowest',
                    opacity: 0
                },
            ],
            onChapterExit: [],
        },
        {
            id: 'chapter-nine',
            alignment: 'left',
            hidden: false,
            title: 'Disinvestment and Neighborhood Deterioration',
            description: 'Redlining became a self-fulfilling prophecy. Redlining and Disvestment in Central Seattle Report <br><br><img src="/images/Redlining_and_Disinvestment.jpg" alt="image of the cover of the Redlining and Disinvestment in Central Seattle Report" width="75" height="200">',
            image: '',
            location: {
                center: [-122.41998, 47.59141],
                zoom: 10.45,
                pitch: 15,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            // RSE SOCIOECONOMIC MAP LEAVES - back to georeferenced redlining map
            onChapterEnter: [
                {
                    layer: 'Socioecon-highest',
                    opacity: 0,
                },
                {
                    layer: 'Socioecon-second-highest',
                    opacity: 0,
                },
                {
                    layer: 'Socioecon-middle',
                    opacity: 0,
                },
                {
                    layer: 'Socioecon-second-lowest',
                    opacity: 0,
                },
                {
                    layer: 'Socioecon-lowest',
                    opacity: 0
                },
                {
                    layer: 'Racial_georef',
                    opacity: 0,
                },
                {
                    layer: 'RSE-highest',
                    opacity: 0,
                },
                {
                    layer: 'RSE-second-highest',
                    opacity: 0,
                },
                {
                    layer: 'RSE-middle',
                    opacity: 0,
                },
                {
                    layer: 'RSE-second-lowest',
                    opacity: 0,
                },
                {
                    layer: 'RSE-lowest',
                    opacity: 0,
                },
                {
                    layer: 'Redlining-Busi',
                    opacity: 0,
                },
                {
                    layer: 'Redlining-Indus',
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
                    layer: 'Redlining_Georef',
                    opacity: 1,
                },
                {
                    layer: 'Racial_Georef',
                    opacity: 0,
                }
            ],
            onChapterExit: [
                {
                    layer: 'Socioecon-highest',
                    opacity: 0,
                },
                {
                    layer: 'Socioecon-second-highest',
                    opacity: 0,
                },
                {
                    layer: 'Socioecon-middle',
                    opacity: 0,
                },
                {
                    layer: 'Socioecon-second-lowest',
                    opacity: 0,
                },
                {
                    layer: 'Socioecon-lowest',
                    opacity: 0
                },
                {
                    layer: 'Racial_georef',
                    opacity: 0,
                },
                {
                    layer: 'RSE-highest',
                    opacity: 0,
                },
                {
                    layer: 'RSE-second-highest',
                    opacity: 0,
                },
                {
                    layer: 'RSE-middle',
                    opacity: 0,
                },
                {
                    layer: 'RSE-second-lowest',
                    opacity: 0,
                },
                {
                    layer: 'RSE-lowest',
                    opacity: 0,
                },
                {
                    layer: 'Redlining_Georef',
                    opacity: 1,
                },
                {
                    layer: 'Racial_Georef',
                    opacity: 0,
                }
            ],
        },
        {
            id: 'chapter-nine-a',
            alignment: 'right',
            hidden: false,
            title: 'Disinvestment: Central District',
            description: 'Banks took money from residents and invested it into white suburbs (Redlining and Disinvestment Report)<br><br><img src="/images/Redlining_Song.jpg" alt="Redlining Anthem" width="75" height="200">',
            //Make image clickable so people can zoom into it
            image: '',
            location: {
                center: [-122.30282, 47.60642],
                zoom: 13,
                pitch: 15,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'Socioecon-highest',
                    opacity: 0,
                },
                {
                    layer: 'Socioecon-second-highest',
                    opacity: 0,
                },
                {
                    layer: 'Socioecon-middle',
                    opacity: 0,
                },
                {
                    layer: 'Socioecon-second-lowest',
                    opacity: 0,
                },
                {
                    layer: 'Socioecon-lowest',
                    opacity: 0
                },
                {
                    layer: 'Racial_georef',
                    opacity: 0,
                },
                {
                    layer: 'RSE-highest',
                    opacity: 0,
                },
                {
                    layer: 'RSE-second-highest',
                    opacity: 0,
                },
                {
                    layer: 'RSE-middle',
                    opacity: 0,
                },
                {
                    layer: 'RSE-second-lowest',
                    opacity: 0,
                },
                {
                    layer: 'RSE-lowest',
                    opacity: 0,
                },
                {
                    layer: 'Redlining_Georef',
                    opacity: 1,
                },
                {
                    layer: 'Racial_Georef',
                    opacity: 0,
                }
            ],
            onChapterExit: [],
        },
        {
            id: 'chapter-ten',
            alignment: 'left',
            hidden: false,
            title: 'Gentrification and Displacement',
            description: 'Redlining and the disinvestment it caused left certain communities, particularly those that were redlined, more vulnerable to gentrification. <b> Gentrification is the process in which lower-income urban neighborhoods undergo demographic shifts due to increased investment in the area and wealthier individuals moving in. </b> Gentrification often leads to displacement of long-term residents, as increased investment drives up rent prices, making it unaffordable for them to stay. Gentrification disproportionately affects formerly redlined neighborhoods due to their history of disinvestment, often forcing people out of the only neighborhoods they were historically allowed to live in. <br> <br> While this issue affects many American cities, the tech economy of Seattle makes these trends even more apparent. In 2019, Seattle was named the 3rd most gentrifying US city. Gentrification and displacement illustrate that housing inequality is not only the result of poor government policy. Corporations also bear a significant portion of the responsibility. In Seattle, these corporations play a key role in the gentrification of formerly redlined zones, as they bring an influx of out-of-towners who often desire to live in the city center. In addition to the population growth they cause, Seattle corporations have been described as “[capturing] the city’s political and economic landscape”, leveraging their power to block affordable housing initiatives.',
            image: '',
            location: {
                center: [-122.45885, 47.59700], 
                zoom: 10.7,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: [],
        },
        {
            id: 'chapter-ten-a',
            alignment: 'right',
            hidden: false,
            title: 'Gentrification: Rainier Valley',
            description: 'TOD and risk of modern investment in historically disinvested areas. Resident quote. Home prices stat.',
            image: '',
            location: {
                center: [-122.28854, 47.54721],
                zoom: 12.15,
                pitch: 15,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: [],
        },
    ]
};
