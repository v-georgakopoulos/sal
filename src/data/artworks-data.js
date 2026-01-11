import pinkCover from "../assets/project-images/artworks/pink/pinkCover.jpg"
import p1 from "../assets/project-images/artworks/pink/layered-Identity1.jpg"
import p2 from "../assets/project-images/artworks/pink/layered-Identity2.jpg"
import p3 from "../assets/project-images/artworks/pink/layered-Identity3.jpg"
import p4 from "../assets/project-images/artworks/pink/layered-Identity4.jpg"

import artemisCover from "../assets/project-images/artworks/artemis/Artemiscover.jpg"
import artemis1 from "../assets/project-images/artworks/artemis/artemis1.jpg"
import artemis2 from "../assets/project-images/artworks/artemis/artemis2.jpg"
import artemis3 from "../assets/project-images/artworks/artemis/artemis3.jpg"
import artemis4 from "../assets/project-images/artworks/artemis/artemis4.jpg"

import resolveCover from "../assets/project-images/artworks/resolve/resolvecover.jpg"
import resolve1 from "../assets/project-images/artworks/resolve/resolve1.jpg"
import resolve2 from "../assets/project-images/artworks/resolve/resolve2.jpg"
import resolve3 from "../assets/project-images/artworks/resolve/resolve3.jpg"
import resolve4 from "../assets/project-images/artworks/resolve/resolve4.jpg"

export const ARTWORKS = [
    {
        id: 1,
        createdAt: Date.now(),
        slug: "layered-identity",
        title: "Layered Identity",
        series: "Layers",
        artist: "Sal",
        technique: "Mixed media on canvas",
        year: "2026",
        dimensions: "80 x 80cm",
        country: "Greece",
        edition: "Unique piece (1/1)",
        signed: "Yes",
        certificate: "Included",
        status: "Avalable",
        images: [pinkCover, p1, p2, p3, p4],
        description: "This portrait is built through repetition, interruption, and removal.The face appears gradually, then recedes, never fully resolving. Rather than presenting identity as a fixed image, the work approaches it as a shifting condition. Visibility and concealment operate simultaneously, allowing the image to exist in a state of tension. What remains is not a portrait in the traditional sense, but a record of how identity is constructed, disrupted, and reassembled. ",
        category: "artworks"
    },
    {
        id: 2,
        createdAt: Date.now(),
        slug: "artemis",
        title: "Artemis",
        series: "-",
        artist: "Sal",
        technique: "Black ink on paper",
        year: "2012",
        dimensions: "40 x 30cm",
        country: "Greece",
        edition: "Unique piece (1/1)",
        signed: "Yes",
        certificate: "Included",
        status: "Avalable",
        images: [artemisCover, artemis1, artemis2, artemis3, artemis4],
        description: "This portrait is formed through repetition and density, emerging from a continuous hand-drawn pattern where line replaces tone and structure replaces shading. Rather than defining the figure through realism, the image is allowed to surface through accumulation and restraint, with the pattern functioning as both construction and interference. The face is held between presence and fragmentation, not presented as a fixed image but as a deliberate assembly of form built entirely by hand.",
        category: "artworks"
    },
    {
        id: 3,
        createdAt: Date.now(),
        slug: "resolve",
        title: "Resolve",
        series: "Downtown",
        artist: "Sal",
        technique: "Black marker on wood",
        year: "2017",
        dimensions: "100 x 100cm",
        country: "Greece",
        edition: "Unique piece (1/1)",
        signed: "Yes",
        certificate: "Included",
        status: "Avalable",
        images: [resolveCover, resolve1, resolve2, resolve3, resolve4],
        description: "This portrait is constructed through a structured accumulation of hand-drawn marks inspired by the geometry and rhythm of the urban environment. Architectural elements and street references replace traditional modeling, forming the image through density and repetition. The work is informed by the presence and gaze of David Gandy, emphasizing determination, focus, and a controlled masculinity. Rather than aiming for likeness, the portrait explores character and presence through structure, resulting in a composed and grounded image defined by clarity and restraint."
    },
]