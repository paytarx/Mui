import * as React from 'react';
import clsx from 'clsx';
import { styled, useTheme, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MailIcon from '@mui/icons-material/Mail';
import DeleteIcon from '@mui/icons-material/Delete';
import Label from '@mui/icons-material/Label';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import InfoIcon from '@mui/icons-material/Info';
import ForumIcon from '@mui/icons-material/Forum';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { SvgIconProps } from '@mui/material/SvgIcon';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import HelpIcon from '@mui/icons-material/Help';
import {TreeItem2Content,TreeItem2IconContainer,TreeItem2Root,TreeItem2GroupTransition,} from '@mui/x-tree-view/TreeItem2';
import {
  unstable_useTreeItem2 as useTreeItem,
  UseTreeItem2Parameters,
} from '@mui/x-tree-view/useTreeItem2';
import { TreeItem2Provider } from '@mui/x-tree-view/TreeItem2Provider';
import { TreeItem2Icon } from '@mui/x-tree-view/TreeItem2Icon';
import { Link, Route, Routes } from 'react-router-dom';
import Mail from '../navbarRoutes/mail'
import Trash from '../navbarRoutes/trash';
import Social from '../navbarRoutes/categories/social';
import Updates from '../navbarRoutes/categories/updates';
import Promotion from '../navbarRoutes/categories/promotion';
import Forums from '../navbarRoutes/categories/forums';
import Comments from '../navbarRoutes/anothersection/comments'
import Group from '../navbarRoutes/anothersection/group'
import Info from '../navbarRoutes/anothersection/info'
import Wikipedia from '../navbarRoutes/anothersection/wikipedia'
import History from '../navbarRoutes/history'


declare module 'react' {
  interface CSSProperties {
    '--tree-view-color'?: string;
    '--tree-view-bg-color'?: string;
  }
}

interface StyledTreeItemProps extends Omit<UseTreeItem2Parameters, 'rootRef'>,React.HTMLAttributes<HTMLLIElement> {
  bgColor?: string;
  bgColorForDarkMode?: string;
  color?: string;
  colorForDarkMode?: string;
  labelIcon: React.ElementType<SvgIconProps>;
  labelInfo?: string;
}

const CustomTreeItemRoot = styled(TreeItem2Root)(({ theme }) => ({
  color: theme.palette.text.secondary,
}));

const CustomTreeItemContent = styled(TreeItem2Content)(({ theme }) => ({
  marginBottom: theme.spacing(0.3),
  color: theme.palette.text.secondary,
  borderRadius: theme.spacing(2),
  paddingRight: theme.spacing(1),
  fontWeight: theme.typography.fontWeightMedium,
  '&.expanded': {
    fontWeight: theme.typography.fontWeightRegular,
  },
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
  '&.focused, &.selected, &.selected.focused': {
    backgroundColor: `var(--tree-view-bg-color, ${theme.palette.action.selected})`,
    color: 'var(--tree-view-color)',
  },
}));

const CustomTreeItemIconContainer = styled(TreeItem2IconContainer)(({ theme }) => ({
  marginRight: theme.spacing(1),
}));

const CustomTreeItemGroupTransition = styled(TreeItem2GroupTransition)(
  ({ theme }) => ({
    marginLeft: 0,
    [`& .content`]: {
      paddingLeft: theme.spacing(2),
    },
  }),
);

const CustomTreeItem = React.forwardRef(function CustomTreeItem(
  props: StyledTreeItemProps,
  ref: React.Ref<HTMLLIElement>,
) {
  const theme = useTheme();
  const {
    id,
    itemId,
    label,
    disabled,
    children,
    bgColor,
    color,
    labelIcon: LabelIcon,
    labelInfo,
    colorForDarkMode,
    bgColorForDarkMode,
    ...other
  } = props;

  const {
    getRootProps,
    getContentProps,
    getIconContainerProps,
    getLabelProps,
    getGroupTransitionProps,
    status,
  } = useTreeItem({ id, itemId, children, label, disabled, rootRef: ref });

  const style = {
    '--tree-view-color': theme.palette.mode !== 'dark' ? color : colorForDarkMode,
    '--tree-view-bg-color':
      theme.palette.mode !== 'dark' ? bgColor : bgColorForDarkMode,
  };

  return (
    <TreeItem2Provider itemId={itemId} >
      <CustomTreeItemRoot {...getRootProps({ ...other, style })}>
        <CustomTreeItemContent
          {...getContentProps({
            className: clsx('content', {
              expanded: status.expanded,
              selected: status.selected,
              focused: status.focused,
            }),
          })}
        >
          <CustomTreeItemIconContainer {...getIconContainerProps()}>
            <TreeItem2Icon status={status} />
          </CustomTreeItemIconContainer>
          <Box
            sx={{
              display: 'flex',
              flexGrow: 1,
              alignItems: 'center',
              p: 0.5,
              pr: 0,
            }}
          >
            <Box component={LabelIcon} color="inherit" sx={{ mr: 1 }} />
            <Typography
              {...getLabelProps({
                variant: 'body2',
                sx: { display: 'flex', fontWeight: 'inherit', flexGrow: 1 },
              })}
            />
            <Typography variant="caption" color="inherit">
              {labelInfo}
            </Typography>
          </Box>
        </CustomTreeItemContent>
        {children && (
          <CustomTreeItemGroupTransition {...getGroupTransitionProps()} />
        )}
      </CustomTreeItemRoot>
    </TreeItem2Provider>
  );
});

function EndIcon() {
  return <div style={{ width: 24 }} />;
}

function getRandomNumberComments (min:any , max:any) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const randomNumberComments = getRandomNumberComments(0,1000)

function getRandomNumberGroup (a:any,b:any){
    return Math.floor(Math.random() * (b - a + 1)) + a;
}
const randomNumberGroup = getRandomNumberGroup(0,100)

export default function GmailTreeView() {
  return (
   <div className='flex duration-300'>
     <SimpleTreeView
    className='border-2 w-96 h-screen duration-300'
      aria-label="gmail"
      defaultExpandedItems={['3']}
      defaultSelectedItems="5"
      slots={{
        expandIcon: ArrowRightIcon,
        collapseIcon: ArrowDropDownIcon,
        endIcon: EndIcon,
      }}
      sx={{ flexGrow: 1, maxWidth: 400 }}
    >
     <div className='basis-3/4'>
    
     </div>

     <Link to={"mail"}>
     <CustomTreeItem itemId="1" label="All Mail" labelIcon={MailIcon} />
     </Link>
     <Link to={"trash"}>
     <CustomTreeItem itemId="2" label="Trash" labelIcon={DeleteIcon} />
     </Link>
      
      <CustomTreeItem itemId="3" label="Categories" labelIcon={Label}>
        <Link to={"social"}>
        <CustomTreeItem
          itemId="5"
          label="Social"
          labelIcon={SupervisorAccountIcon}
          labelInfo="90"
          color="#1a73e8"
          bgColor="#e8f0fe"
          colorForDarkMode="#B8E7FB"
          bgColorForDarkMode={alpha('#00b4ff', 0.2)}
        />
        </Link>

        <Link to={"updates"}>
        <CustomTreeItem
          itemId="6"
          label="Updates"
          labelIcon={InfoIcon}
          labelInfo="2,294"
          color="#e3742f"
          bgColor="#fcefe3"
          colorForDarkMode="#FFE2B7"
          bgColorForDarkMode={alpha('#ff8f00', 0.2)}
        />
        </Link>
       
        <Link to={"forums"}>
        <CustomTreeItem
          itemId="7"
          label="Forums"
          labelIcon={ForumIcon}
          labelInfo="3,566"
          color="#a250f5"
          bgColor="#f3e8fd"
          colorForDarkMode="#D9B8FB"
          bgColorForDarkMode={alpha('#9035ff', 0.15)}
        />
        </Link>

        <Link to={"promotions"}>
        <CustomTreeItem
          itemId="8"
          label="Promotions"
          labelIcon={LocalOfferIcon}
          labelInfo="733"
          color="#3c8039"
          bgColor="#e6f4ea"
          colorForDarkMode="#CCE8CD"
          bgColorForDarkMode={alpha('#64ff6a', 0.2)}
        />
        </Link>
   
      </CustomTreeItem>
     
    
     

{/* Another section */}

<CustomTreeItem itemId="9" label="Section 2" labelIcon={Label}>
       <Link to={"group"}>
       <CustomTreeItem
          itemId="11"
          label="Group"
          labelIcon={SupervisorAccountIcon}
          labelInfo={randomNumberGroup}
          color="#1a73e8"
          bgColor="#e8f0fe"
          colorForDarkMode="#B8E7FB"
          bgColorForDarkMode={alpha('#00b4ff', 0.2)}
        />
       </Link>

        <Link to={"info"}>
        <CustomTreeItem
          itemId="12"
          label="Information"
          labelIcon={InfoIcon}
          color="#e3742f"
          bgColor="#fcefe3"
          colorForDarkMode="#FFE2B7"
          bgColorForDarkMode={alpha('#ff8f00', 0.2)}
        />
        </Link>
        
        <Link to={"comments"}>
        <CustomTreeItem
          itemId="13"
          label="Comments"
          labelIcon={ForumIcon}
          labelInfo={randomNumberComments}
          color="#a250f5"
          bgColor="#f3e8fd"
          colorForDarkMode="#D9B8FB"
          bgColorForDarkMode={alpha('#9035ff', 0.15)}
        />
        </Link>
        
        <Link to={"wikipedia"}>
        <CustomTreeItem
          itemId="14"
          label="Wikipedia"
          labelIcon={HelpIcon}
          color="#3c8039"
          bgColor="#e6f4ea"
          colorForDarkMode="#CCE8CD"
          bgColorForDarkMode={alpha('#64ff6a', 0.2)}
        />
        </Link>
        
      </CustomTreeItem>


      <CustomTreeItem itemId='15' label="Section 3" labelIcon={Label}>

      <CustomTreeItem
      itemId='16'
      label="Social"
      labelIcon={SupervisorAccountIcon}
      labelInfo='1'
      color='#1a73e8'
      bgColor='#e8f0fe'
      colorForDarkMode='#B8E7FB'
      bgColorForDarkMode={alpha('#00b4ff', 0.2)}
      >
      </CustomTreeItem>
      <Link to={"info"}>
        <CustomTreeItem
          itemId="17"
          label="Information"
          labelIcon={InfoIcon}
          color="#e3742f"
          bgColor="#fcefe3"
          colorForDarkMode="#FFE2B7"
          bgColorForDarkMode={alpha('#ff8f00', 0.2)}
        />
        </Link>
        
        <Link to={"comments"}>
        <CustomTreeItem
          itemId="18"
          label="Comments"
          labelIcon={ForumIcon}
          labelInfo={randomNumberComments}
          color="#a250f5"
          bgColor="#f3e8fd"
          colorForDarkMode="#D9B8FB"
          bgColorForDarkMode={alpha('#9035ff', 0.15)}
        />
        </Link>
        <Link to={"wikipedia"}>
        <CustomTreeItem
          itemId="19"
          label="Wikipedia"
          labelIcon={HelpIcon}
          color="#3c8039"
          bgColor="#e6f4ea"
          colorForDarkMode="#CCE8CD"
          bgColorForDarkMode={alpha('#64ff6a', 0.2)}
        />
        </Link>

      </CustomTreeItem>

      <Link to={"history"}>
      <CustomTreeItem itemId="4" label="History" labelIcon={Label} />
      </Link>

    </SimpleTreeView>

    <Routes>
        <Route path='/mail' element={<Mail/>}></Route>
        <Route path='/trash' element={<Trash/>}></Route>
      
        <Route path='/social' element={<Social />} ></Route>
        <Route path='/updates' element={<Updates />} ></Route>
        <Route path='/forums' element={<Forums />} ></Route>
        <Route path='/promotions' element={<Promotion />} ></Route>

        <Route path='/comments' element={<Comments/>}></Route>
        <Route path='/group' element={<Group/>}></Route>
        <Route path='/info' element={<Info/>}></Route>
        <Route path='/wikipedia' element={<Wikipedia/>}></Route>

        <Route path='/history' element={<History/>}></Route>
        
      </Routes>
   </div>
  );
}