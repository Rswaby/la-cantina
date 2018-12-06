import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { EventCategoryCard } from '../../components/';
import { fetchCategories } from '../../fetches';


class EventCategoriesContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            categoriesFetched: false
        };
    };

    componentDidMount() {
        const { categoriesFetched } = this.state;
        if (!categoriesFetched) {
            fetchCategories().then(response => {
                this.setState({
                    categories: response,
                    categoriesFetched: true
                })
            })
        }
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
        const { categories, categoriesFetched } = this.state;
        return (
            <div>
                <div>
                    <Typography variant='title' align='left'>
                        Explore Events By Category
                    </Typography>
                </div>
                {categories? this.renderCategories():<div>loading...</div>}
            </div>
        );
    };
}

export default EventCategoriesContainer;
