import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { EventCategoryCard } from '../../components/';


class EventCategoriesContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: []
        };
    };

    componentDidMount() {
        // fetch event categories
        fetch('/category')
            .then(response => response.json())
            .then(categories => this.setState({ categories: categories }));
    };

    renderCategories() {
        // render categories in 'Explore Events By Category' section
        const categoryCards = this.state.categories.map(category => {
                return <EventCategoryCard categoryId={category.id} categoryName={category.name} />
            });

        return (
            <div>
                <Grid container justify="center" spacing={16}>
                    {
                        categoryCards.map(category => {
                            return <Grid item xs={12} sm={6} md={4} lg={3}>{category}</Grid>;
                        })
                    }
                </Grid>
            </div>
        );
    };

    render() {
        return (
            <div>
                <div>
                    <Typography variant='h5' align='left'>
                        Explore Events By Category
                    </Typography>
                </div>
                { this.renderCategories() }
            </div>
        );
    };
}

export default EventCategoriesContainer;
