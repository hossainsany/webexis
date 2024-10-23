const SingeServicePage = async props => {
    const params = await props.params;
    console.log(params.slug);

    return <div>page</div>;
};

export default SingeServicePage;
