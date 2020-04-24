export interface TramStop {
  line: string;
  stops: string[];
}

export const tramStops: TramStop[] = [
  {
    line: 'M1',
    stops: [
      'Schillerstr.',
      'Waldemarstr.',
      'Nordend',
      'Heinrich-Böll-Str.',
      'Kuckhoffstr.',
      'Hermann-Hesse-Str./Waldstr.',
      'Rosenthal Nord',
      'Hauptstr./Friedrich-Engels-Str.',
      'Wiesenwinkel',
      'Angerweg',
      'Nordendstr.',
      'Friedrich-Engels-Str./Eichenstr.',
      'Am Iderfenngraben',
      'Pastor-Niemöller-Platz',
      'Grabbeallee/Pastor-Niemöller-Pl.',
      'Tschaikowskistr.',
      'Bürgerpark Pankow',
      'Rathaus Pankow',
      'Pankow Kirche',
      'S+U Pankow',
      'Masurenstr.',
      'U Vinetastr.',
      'Schönhauser Allee/Bornholmer Str',
      'S+U Schönhauser Allee',
      'Milastr.',
      'U Eberswalder Str.',
      'Schwedter Str.',
      'Zionskirchplatz',
      'U Rosenthaler Platz',
      'U Weinmeisterstr./Gipsstr.',
      'S Hackescher Markt',
      'Monbijouplatz',
      'S Oranienburger Str.',
      'U Oranienburger Tor',
      'U Oranienburger Tor',
      'S+U Friedrichstr.',
      'Universitätsstr.',
      'Georgenstr./Am Kupfergraben',
      'Am Kupfergraben'
    ]
  },
  {
    line: 'M2',
    stops: [
      'Heinersdorf',
      'Rothenbachstr.',
      'Heinersdorf Kirche',
      'Am Wasserturm',
      'Tino-Schwierzina-Str.',
      'Am Steinberg',
      'Prenzlauer Prom./Am Steinberg',
      'Prenzlauer Allee/Ostseestr.',
      'Erich-Weinert-Str.',
      'S Prenzlauer Allee',
      'Fröbelstr.',
      'Prenzlauer Allee/Danziger Str.',
      'Marienburger Str.',
      'Knaackstr.',
      'Prenzlauer Allee/Metzer Str.',
      'Mollstr./Prenzlauer Allee',
      'S+U Alexanderpl/Memhardstr.',
      'S+U Alexanderplatz/Dircksenstr.'
    ]
  },
  {
    line: 'M4',
    stops: [
      'Falkenberg',
      'Welsestr.',
      'Falkenberger Ch./Prendener Str.',
      'S Hohenschönhausen',
      'Zingster Str.',
      'Zingster Str./Ribnitzer Str.',
      'Ahrenshooper Str.',
      'Prerower Platz',
      'Hansastr./Malchower Weg',
      'Feldtmannstr.',
      'Stadion Buschallee/Hansastr.',
      'Giersstr.',
      'Hansastr./Buschallee',
      'Sulzfelder Str.',
      'Buschallee',
      'Weißer See',
      'Albertinenstr.',
      'Antonplatz',
      'Greifswalder Str./Ostseestr.',
      'Thomas-Mann-Str.',
      'S Greifswalder Str.',
      'Greifswalder Str./Danziger Str.',
      'Hufelandstr.',
      'Am Friedrichshain',
      'Mollstr./Otto-Braun-Str.',
      'U Alexanderplatz',
      'S+U Alexanderplatz/Gontardstr.',
      'Spandauer Str./Marienkirche',
      'S Hackescher Markt'
    ]
  },
  {
    line: 'M5',
    stops: [
      'Zingster Str.',
      'Zingster Str./Ribnitzer Str.',
      'Ahrenshooper Str.',
      'Prerower Platz',
      'Rüdickenstr.',
      'Arnimstr.',
      'Anna-Ebermann-Str.',
      'Gehrenseestr.',
      'Alt-Hohenschönhausen',
      'Oberseestr.',
      'Freienwalder Str.',
      'Werneuchener Str.',
      'Simon-Bolivar-Str.',
      'Sandinostr.',
      'Hohenschönhauser Str.',
      'Judith-Auer-Str.',
      'Oderbruchstr.',
      'S Landsberger Allee',
      'Landsberger Al./Petersburger Str',
      'Klinikum im Friedrichshain',
      'Platz der Vereinten Nationen',
      'Büschingstr.',
      'Mollstr./Otto-Braun-Str.',
      'U Alexanderplatz',
      'S+U Alexanderplatz/Gontardstr.',
      'Spandauer Str./Marienkirche',
      'S Hackescher Markt',
      'Monbijouplatz',
      'S Oranienburger Str.',
      'U Oranienburger Tor',
      'Torstr./U Oranienburger Tor',
      'U Naturkundemuseum',
      'U Naturkundemuseum',
      'Invalidenpark',
      'S+U Hauptbahnhof',
      'Clara-Jaschke-Str.',
      'Lesser-Ury-Weg',
      'Lüneburger Str.'
    ]
  },
  {
    line: 'M6',
    stops: [
      'Riesaer Str.',
      'Riesaer Str./Louis-Lewin-Str.',
      'Jenaer Str.',
      'Nossener Str.',
      'U Hellersdorf',
      'Stendaler Str./Quedlinburger Str',
      'Stendaler Str./Zossener Str.',
      'Zossener Str./Kastanienallee',
      'Alte Hellersdorfer/Zossener Str.',
      'Michendorfer Str.',
      'Landsberger Ch./Zossener Str.',
      'Betriebshof Marzahn',
      'Brodowiner Ring',
      'Landsberger Allee/Blumberger D.',
      'Jan-Petersen-Str.',
      'Freizeitforum Marzahn',
      'Marzahner Promenade',
      'S Marzahn',
      'Gewerbepark Georg Knorr',
      'Dingelstädter Str.',
      'Landsberger Allee/Rhinstr.',
      'Schalkauer Str.',
      'Arendsweg',
      'Genslerstr.',
      'Zechliner Str.',
      'Altenhofer Str.',
      'Hohenschönhauser Str.',
      'Judith-Auer-Str.',
      'Oderbruchstr.',
      'S Landsberger Allee',
      'Landsberger Al./Petersburger Str',
      'Klinikum im Friedrichshain',
      'Platz der Vereinten Nationen',
      'Büschingstr.',
      'Mollstr./Otto-Braun-Str.',
      'U Alexanderplatz',
      'S+U Alexanderplatz/Gontardstr.',
      'Spandauer Str./Marienkirche',
      'S Hackescher Markt'
    ]
  },
  {
    line: 'M8',
    stops: [
      'Ahrensfelde/Stadtgrenze',
      'Barnimplatz',
      'Niemegker Str.',
      'Wuhletalstr.',
      'Max-Herrmann-Str.',
      'Bürgerpark Marzahn',
      'Jan-Petersen-Str.',
      'Alt-Marzahn',
      'Adersleber Weg',
      'Allee d. Kosmonauten/Poelchaustr',
      'Boschpoler Str.',
      'Helene-Weigel-Platz',
      'S Springpfuhl',
      'Beilsteiner Str.',
      'Allee der Kosmonauten/Rhinstr.',
      'Ev. Krankenhaus KEH',
      'Herzbergstr./Siegfriedstr.',
      'Herzbergstr./Industriegebiet',
      'Bernhard-Bästlein-Str.',
      'Roederplatz',
      'Anton-Saefkow-Platz',
      'Landsberger Allee/Karl-Lade-Str.',
      'S Landsberger Allee',
      'Landsberger Al./Petersburger Str',
      'Klinikum im Friedrichshain',
      'Platz der Vereinten Nationen',
      'Büschingstr.',
      'Mollstr./Otto-Braun-Str.',
      'Mollstr./Prenzlauer Allee',
      'U Rosa-Luxemburg-Platz',
      'U Rosenthaler Platz',
      'Brunnenstr./Invalidenstr.',
      'Pappelplatz',
      'S Nordbahnhof',
      'U Naturkundemuseum',
      'Invalidenpark',
      'S+U Hauptbahnhof',
      'Clara-Jaschke-Str.',
      'Lesser-Ury-Weg',
      'Lüneburger Str.'
    ]
  },
  {
    line: 'M10',
    stops: [
      'Lüneburger Str.',
      'Lesser-Ury-Weg',
      'Clara-Jaschke-Str.',
      'S+U Hauptbahnhof',
      'Invalidenpark',
      'U Naturkundemuseum',
      'S Nordbahnhof',
      'Gedenkstätte Berliner Mauer',
      'U Bernauer Str.',
      'Wolliner Str.',
      'Friedrich-Ludwig-Jahn-Sportpark',
      'U Eberswalder Str.',
      'Husemannstr.',
      'Prenzlauer Allee/Danziger Str.',
      'Winsstr.',
      'Greifswalder Str./Danziger Str.',
      'Arnswalder Platz',
      'Kniprodestr./Danziger Str.',
      'Paul-Heyse-Str.',
      'Landsberger All./Petersburger Str.',
      'Straßmannstr.',
      'Bersarinplatz',
      'U Frankfurter Tor',
      'Grünberger Str./Warschauer Str.',
      'Revaler Str.',
      'S Warschauer Str.',
      'S+U Warschauer Str.'
    ]
  }
];
