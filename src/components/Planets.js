import React from 'react'
import { Grid, Card } from 'semantic-ui-react'

export default function Planets({data}) {
    return (
        <>
            <h1>Planets</h1>
            <Grid columns={5}>
                {data.map((planet, i)=>{
                    return(
                        <Grid.Column key={i}>
                            <Card>
                                <Card.Content>
                                    <Card.Header>{planet.name}</Card.Header>
                                    <Card.Description>
                                        <strong>Climate</strong>
                                        <p>{planet.climate}</p>
                                        <strong>Diameter</strong>
                                        <p>{planet.diameter}</p>
                                        <strong>Population</strong>
                                        <p>{planet.population}</p>
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    )
                })}
            </Grid>
        </>
    )
}
