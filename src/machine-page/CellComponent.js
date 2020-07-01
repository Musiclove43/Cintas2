import React from 'react';
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ClearIcon from "@material-ui/icons/Clear";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import AssignItem from "../assignItem";
import Paper from "@material-ui/core/Paper";

export class CellComponent extends React.Component {

    constructor(props) {
        super(props);

        let cell = props.cell;

        // set the state
        this.state = {
            // cell: props.cell,
            imageURL: props.cell.imageURL,
            itemName: props.cell.itemName,
            size: props.cell.size,
            cellNum: props.cell.cellNum
        };

        this.assignCell = this.assignCell.bind(this);
        this.unassignCell = this.unassignCell.bind(this);
    }

    /**
     * a juicy update never hurt no hoe
     * @param prevProps
     * @param prevState
     * @param snapshot
 */

//      componentWillReceiveProps(nextProps) {
//   if (nextProps.cell !== this.state.cell) {
// let cell = nextProps.cell
// console.log(cell)
// }
// }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.cell !== this.props.cell) {
            this.setState({imageURL: this.props.cell.imageURL, itemName: this.props.cell.itemName, size: this.props.cell.size, cellNum: this.props.cell.cellNum});
            let cell = this.props.cell
            // this.loadMachineData();
            console.log(cell)
        }

        // console.log(this.state.cell)
        // console.log(this.state.imageURL)
    }

    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.cell !== this.state.cell) {
    //         this.setState(prevState => ({ cell: nextProps.cell }));
    //         // let cell = nextProps.cell
    //     }
    // }
    componentDidMount() {
      console.log(this.props.cell);

        // this.setState({cell: this.props.cell});
    }

    /**
     * unassign the cell
     */
    unassignCell() {
        this.props.deleteCell(this.state.cellNum);
        this.setState({
            imageURL: '',
            itemName: '',
            size: '',
            cellNum: 0
        });
    }

    /**
     * assign the cell
     * @param e
     */
    assignCell(e) {
        console.log(e);
        this.setState({
            imageURL: e.imageURL,
            itemName: e.itemName,
            size: e.size,
            cellNum: e.cellNum
        });
    }

    render() {
        return (
            <Paper style={{
                marginRight: 15,
                flexBasis: "19%",
                marginTop: 15,
                // padding: 20,
            }} elevation={3}>
                <div style={{display:"flex", justifyContent:"space-between", marginLeft: "auto", backgroundColor: "#002C6F", borderRadius: 2, color: "white", paddingLeft: 10, paddingTop: 5, paddingBottom: 1}}>
                    <Typography gutterBottom variant="h6"  component="h6" >
                        Cell {this.state.cellNum}
                    </Typography>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={this.unassignCell}
                        style={{marginTop:"-10px"}}
                    >
                        <ClearIcon />
                    </IconButton>
                </div>
                <div style={{marginLeft: "auto"}}>
                    <Card button>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt={this.state.itemName}
                                height="200"
                                image={this.state.imageURL}
                                title={this.state.itemName}
                            />
                            <CardContent >
                                <Typography gutterBottom variant="h5"  component="h2">
                                    {this.state.itemName}
                                </Typography>
                                <Typography  variant="body2" color="textSecondary" component="p">
                                    {this.state.size}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                  {/*      <AssignItem selectmachine={this.props.selectedMachine} cellNum={this.state.cellNum} callBack={this.assignCell}/> */}
                    </Card>
                </div>
            </Paper>
        );
    }
}
