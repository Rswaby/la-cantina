import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { EventCategoryCard } from '../../components/';
//import { fetchCategories } from '../../fetches';


const inlineStyles = {
    header: {
        margin: '0 15% 2% 15%',
    },
    categories: {
        margin: '0 15% 1% 15%',
    },
};

class EventCategoriesContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [
                { name: "manhattan" },
                { name: "manhattan" },
                { name: "manhattan" },
                { name: "manhattan" },
                { name: "manhattan" },
                { name: "manhattan" },
                { name: "manhattan" },
                { name: "manhattan" }
            ],
            categoriesFetched: true
        };
    };

    renderCategories() {
        const categoryCards = this.state.categories.map(category => {
            return <EventCategoryCard categoryId={category.name} categoryName={category.name} href={`/explore/${category.name}`} />
        });

        return (
            <div style={inlineStyles.categories}>
                <Grid container alingContent={'stretch'} spacing={40}>
                    {
                        categoryCards.map(category => {
                            return <Grid item sm={6} md={4} lg={3}>{category}</Grid>;
                        })
                    }
                </Grid>
            </div>
        );
    };

    render() {
        const { categories } = this.state;
        return (
            <div>
                <div style={inlineStyles.header}>
                    <Typography variant='title' align='center'>
                        Popular neighborhoods
                    </Typography>
                </div>
                {categories ? this.renderCategories() : <div>loading...</div>}
            </div>
        );
    };
}

export default EventCategoriesContainer;
