class ProvenanceIndex {
  data() {
    return {
      permalink: "/provenance-index.json",
      eleventyExcludeFromCollections: true,
    };
  }

  render({ collections }) {
    const pages = collections.publishable || [];
    const packs = {};

    for (const page of pages) {
      const prov = page.data.provenance;
      if (!prov) continue;

      const packId = prov.pack.id;
      if (!packs[packId]) {
        packs[packId] = {
          version: prov.pack.version,
          documents: {},
        };
      }

      for (const source of prov.sources || []) {
        const doc = source.document;
        if (!packs[packId].documents[doc]) {
          packs[packId].documents[doc] = {
            version: source.document_version,
            records: {},
          };
        }

        if (!packs[packId].documents[doc].records[source.path]) {
          packs[packId].documents[doc].records[source.path] = {
            hash_at_generation: source.hash,
            pages: [],
          };
        }

        packs[packId].documents[doc].records[source.path].pages.push({
          url: page.data.permalink,
          role: source.role,
        });
      }
    }

    const output = {
      schema_version: "2",
      generated_at: new Date().toISOString(),
      site_url: "https://www.gloucester.gov.uk",
      packs,
    };

    return JSON.stringify(output, null, 2);
  }
}

module.exports = ProvenanceIndex;
