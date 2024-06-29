const searchParams = location.search; /// ?id=555

const params = new URLSearchParams(searchParams);

const id = params.get("id"); //555
